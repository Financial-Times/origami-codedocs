'use strict';

const getRepo = require('./get-repo');
const uploadDoclets = require('./upload-doclets-to-s3');
const downloadDoclets = require('./download-doclets-from-s3');
const download = require('./download-repo');
const { NoCodeInputError } = require('./codedoc');
const Raven = require('raven');

module.exports = async (componentKey, codedocs) => {
    const language = codedocs.language;
    const [repoId, versionId] = componentKey.split('@');
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache'
        },
        body: ''
    };
    const successCacheControl = 'public, s-maxage=31536000, max-age=604800, stale-while-revalidate=604800, stale-if-error=604800';

    // Get from S3.
    try {
        const downloadedDoclets = await downloadDoclets(repoId, versionId, language);
        response.headers['Content-Type'] = 'application/json;charset=utf-8';
        response.headers['Cache-Control'] = successCacheControl;
        response.body = downloadedDoclets;
        return response;
    } catch (error) {
        // Unable to download doclets so fail silently and generate them instead.
        console.log('Unable to download doclets from S3.', error.message);
    }

    // Generate from repo.
    let repo;
    let doclets;
    try {
        console.log(`Getting "${componentKey}" repo information.`);
        repo = await getRepo(repoId, versionId, language);
    } catch (error) {
        response.statusCode = 404;
        response.body = error.message;
        return response;
    }

    try {
        console.log(`Downloading "${componentKey}" code.`);
        const codeDirectory = await download(repo.url, repo.name, repo.versionTag, language);
        console.log(`Generating "${componentKey}" codedocs.`);
        doclets = await codedocs.generateFor(codeDirectory);
    } catch (error) {
        if (error.response && error.response.statusCode === 404) {
            response.statusCode = 404;
            response.body = `No code found for "${repoId}@${versionId}".`;
            return response;
        }

        if (error instanceof NoCodeInputError) {
            response.statusCode = 404;
            response.body = `No "${language}" found for "${repoId}@${versionId}".`;
            return response;
        }

        response.statusCode = 500;
        response.body = `Error generating codedocs for component "${repoId}@${versionId}". ${error.message}`;
        Raven.captureException(error, {
            extra: {
                name: repoId,
                version: versionId,
                language
            }
        });
        return response;
    }

    // Store to S3.
    try {
        console.log(`Uploading "${componentKey}" codedocs to S3.`);
        await uploadDoclets(doclets, repoId, versionId, language);
    } catch (error) {
        // Fail silently as end users are unaffected.
        console.log('Unable to upload doclets to S3.', error.message);
    }

    response.headers['Content-Type'] = 'application/json;charset=utf-8';
    response.headers['Cache-Control'] = successCacheControl;
    response.body = doclets;
    return response;
};
