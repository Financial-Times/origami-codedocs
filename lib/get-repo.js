'use strict';

const RepoDataClient = require('@financial-times/origami-repo-data-client');
const env = process.env;
const repoData = new RepoDataClient({
    apiKey: env.REPO_DATA_API_KEY,
    apiSecret: env.REPO_DATA_API_SECRET
});

module.exports = async (repoId, versionId, language) => {
    if (!repoId || !versionId) {
        throw new Error('Could not find component, expecting a component with version e.g. "o-test-component@1.0.28".');
    }

    let repo;

    try {
        console.log({ repoId, versionId, language });
        repo = await repoData.getVersion(repoId, versionId);
    } catch (error) {
        throw new Error(`Could not find repository for Origami component "${repoId}@${versionId}". ${error.message}`);
    }

    if (repo.type !== 'module' && repo.type !== null) {
        throw new Error(`"${repoId}@${versionId}" is of type "${repo.type}", only "module" or "null" types are supported.`);
    }

    if (!Array.isArray(repo.languages) || !repo.languages.includes(language)) {
        throw new Error(`"${repoId}@${versionId}" does not have "${language}" to generate codedocs for.`);
    }

    return repo;
};
