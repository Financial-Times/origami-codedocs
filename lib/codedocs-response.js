'use strict';

const getRepo = require('./get-repo');
const uploadDoclets = require('./upload-doclets-to-s3');
const downloadDoclets = require('./download-doclets-from-s3');
const download = require('./download-repo');

module.exports = async (componentKey, codedocs) => {
    const language = codedocs.language;
    const [repoId, versionId] = componentKey.split('@');
    const response = {
        statusCode: 200,
        headers: {
            'content-type': 'text/html; charset=utf-8'
        },
        body: ''
    };

    // Get from S3.
    try {
        const downloadedDoclets = await downloadDoclets(repoId, versionId, language);
        response.headers['content-type'] = 'application/json;charset=utf-8';
        response.body = downloadedDoclets;
        return response;
    } catch (error) {
        // Unable to download doclets so generate them.
        // @todo log error
    }


    // Generate from repo.
    let repo;
    let doclets;
    try {
        repo = await getRepo(repoId, versionId, language);
    } catch (error) {
        response.statusCode = 404;
        response.body = error.message;
        return response;
    }

    try {
        const codeDirectory = await download(repo.name, repo.versionTag, language);
        doclets = await codedocs.generateFor(codeDirectory);
    } catch (error) {
        response.statusCode = 500;
        response.body = `Error generating codedocs for component "${repoId}@${versionId}". ${error.message}`;
        return response;
    }

    // Store to S3.
    try {
        await uploadDoclets(doclets, repoId, versionId, language);
    } catch (error) {
        // @todo log error when unable to upload to S3
    }

    response.headers['content-type'] = 'application/json;charset=utf-8';
    response.body = doclets;
    return response;
};
