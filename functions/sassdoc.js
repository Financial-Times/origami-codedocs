"use strict";

const RepoDataClient = require('@financial-times/origami-repo-data-client');
const uploadDoclets = require('../lib/upload-doclets-to-s3');
const sassdoc = require('../lib/sassdoc');
const download = require('../lib/download-repo');
const env = process.env;

exports.handler = async (event, context) => {
    const language = 'scss';
    const componentKey = decodeURIComponent(event.pathParameters.componentId);
    const [repoId, versionId] = componentKey.split('@');
    const response = {
        statusCode: 200,
        headers: {
            'content-type': 'text/html'
        },
        body: ''
    };

    if (!versionId) {
        response.statusCode = 404;
        response.body = `Could not find component, expecting a version e.g. "o-test-component@1.0.28". ${error.message}`;
    }

    const repoData = new RepoDataClient({
        apiKey: env.REPO_DATA_API_KEY,
        apiSecret: env.REPO_DATA_API_SECRET
    });

    let repo;
    try {
        repo = await repoData.getVersion(repoId, versionId);
    } catch (error) {
        response.statusCode = 404;
        response.body = `Could not find repository for Origami component "${repoId}@${versionId}". ${error.message}`;
        return response;
    }

    if (!repo.type == 'module' || !repo.type == 'component') {
        response.statusCode = 404;
        response.body = `"${repoId}@${versionId}" is of type "${repo.type}", only "module/component" types are supported.`;
        return response;
    }

    if (!Array.isArray(repo.languages) || !repo.languages.includes(language)) {
        response.statusCode = 404;
        response.body = `"${repoId}@${versionId}" does not have "${language}" to generate codedocs for.`;
        return response;
    }

    try {
        const codeDirectory = await download(repo.name, repo.versionTag, language);
        const doclets = await sassdoc(codeDirectory);
        await uploadDoclets(doclets, repoId, versionId, language);
        response.headers['content-type'] = 'application/json';
        response.body = doclets;
        return response;
    } catch (error) {
        response.statusCode = 500;
        response.body = `Error generating codedocs for component "${repoId}@${versionId}". ${error.message}`;
        return response;
    }
}
