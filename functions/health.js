'use strict';

const got = require('got');
const AWS = require('aws-sdk');
const getRepo = require('../lib/get-repo');
const Raven = require('raven');
const RavenLambdaWrapper = require('serverless-sentry-lib');
const getNpmTarballUrl = require('get-npm-tarball-url').default;
const env = process.env;

const s3 = new AWS.S3({
    accessKeyId: env.AWS_ACCESS_ID,
    secretAccessKey: env.AWS_SECRET
});

const bucket = env.AWS_DOCLET_BUCKET;
const testComponent = 'o-test-component';
const testComponentVersion = 'v1.0.29';
let lastCheck = null;
let gtg = true;
const health = {
    schemaVersion: 1,
    systemCode: 'origami-codedocs',
    name: 'origami-codedocs',
    description: 'Open API endpoint for generating raw, automated code documentation of Origami Components, including JSDoc and SassDoc.',
    checks: [
        {
            id: 's3-write',
            ok: true,
            name: 'Able to write to S3',
            severity: 3,
            businessImpact: 'AWS costs will be higher than usual.',
            technicalSummary: `Can not write to S3 bucket named "${bucket}". As AWS S3 is unavailable, AWS Lambda will re-generate codedocs repeatedly, rather than fetch already generated codedocs from AWS S3.`,
            panicGuide: 'It is likely that the AWS API keys that are being used have expired and new ones need to be generated, check "AWS_ACCESS_KEY_ID" and "AWS_SECRET_ACCESS_KEY".',
            checkOutput: 'None',
            lastUpdated: new Date()
        },
        {
            id: 'github-repos-availability',
            ok: true,
            name: 'Able to reach the Github repos API',
            severity: 3,
            businessImpact: 'Minor risk of reduced developer productivity.',
            technicalSummary: 'Can not reach the Github api. To generate documentation for old versions of Origami components, component code first is downloaded from Github as a tarball.',
            panicGuide: 'Check [Github\'s status](https://status.github.com/messages), and confirm the Github API has not changed.',
            checkOutput: 'None',
            lastUpdated: new Date()
        },
        {
            id: 'origami-data-serivce-availability',
            ok: true,
            name: 'Able to get data from the Origami Repo Data service',
            severity: 2,
            businessImpact: 'Reduced developer productivity.',
            technicalSummary: 'Can not download Origami component information for a given version from the [Origami Repo Data service](https://origami-repo-data.ft.com/v1).',
            panicGuide: 'Check the [health status of the Origami Repo Data service](https://origami-repo-data.ft.com/__health) and that the keys to access the service are valid "REPO_DATA_API_KEY" and "REPO_DATA_API_KEY".',
            checkOutput: 'None',
            lastUpdated: new Date()
        },
        {
            id: 'npm-tarball-availability',
            ok: true,
            name: 'Able to reach the npm package tarball endpoint',
            severity: 2,
            businessImpact: 'Reduced developer productivity.',
            technicalSummary: 'Can not download npm package tarballs. To generate documentation for recent releases of Origami components, component code first is downloaded from npm as a tarball.',
            panicGuide: 'Check [npm\'s status](https://status.npmjs.org/), and confirm the NPM API has not changed - see the npm package "get-npm-tarball-url" which is used to resolve the correct endpoint.',
            checkOutput: 'None',
            lastUpdated: new Date()
        },
    ]
};

/**
 *
 * @param {number} previousTime - milliseconds since unix epoch -- E.G. Date.now().
 * @returns {number} difference in seconds between current time and `previousTime` in seconds.
 */
function secondsSince(previousTime) {
    const currentTime = Date.now();
    return Math.floor((currentTime - previousTime) / 1000);
}

const githubUrl = `https://api.github.com/repos/Financial-Times/${testComponent}/tarball/${testComponentVersion}`;
const apiEndpointTimeout = 20000;

exports.handler = RavenLambdaWrapper.handler(Raven, async (event) => {
    let runThrottledTests = false;
    if (lastCheck === null || secondsSince(lastCheck) > 60) {
        lastCheck = Date.now();
        runThrottledTests = true;
    }

    try {
        // Get repo data (from the Origami Repo Data service)
        if (runThrottledTests) {
            health.checks[2].lastUpdated = new Date();
            await getRepo(testComponent, testComponentVersion, 'js');
        }
    } catch (error) {
        gtg = false;
        health.checks[2].ok = false;
        health.checks[2].checkOutput = `Unable to get repo data for "${testComponent}" at version "${testComponentVersion}": ${error.message}`;
    }

    try {
        // Access GitHub repos API
        if (runThrottledTests) {
            health.checks[1].lastUpdated = new Date();
            await got.head(githubUrl, {
                timeout: {
                    response: apiEndpointTimeout
                },
                headers: { 'User-Agent': 'OrigamiCodedocsService' }
            });
        }
    } catch (response) {
        gtg = false;
        health.checks[1].ok = false;
        if (response.code === 'ETIMEDOUT') {
            health.checks[1].checkOutput = `Github URL "${githubUrl}" took longer than ${apiEndpointTimeout}ms to respond.`;
        } else {
            health.checks[1].checkOutput = `Status code of "${response.statusCode}" from Github URL "${githubUrl}".`;
        }
    }

    const npmTarballURL = getNpmTarballUrl('@financial-times/o-test-component', '3.1.0');
    try {
        // Access npm tarball endpoint
        if (runThrottledTests) {
            health.checks[3].lastUpdated = new Date();
            await got.head(npmTarballURL, {
                timeout: {
                    response: apiEndpointTimeout
                },
                headers: { 'User-Agent': 'OrigamiCodedocsService' }
            });
        }
    } catch (response) {
        gtg = false;
        health.checks[3].ok = false;
        if (response.code === 'ETIMEDOUT') {
            health.checks[3].checkOutput = `NPM URL "${npmTarballURL}" took longer than ${apiEndpointTimeout}ms to respond.`;
        } else {
            health.checks[3].checkOutput = `Status code of "${response.statusCode}" from NPM URL "${npmTarballURL}".`;
        }
    }

    // Return /__gtg if requested.
    if (event.path === '/__gtg') {
        return {
            statusCode: gtg ? 200 : 503,
            body: gtg ? 'OK' : 'Service Unavailable',
            headers: {
                'Cache-Control': 'no-store, private',
                'Content-Type': 'text/plain; charset=utf-8'
            }
        };
    }

    // Write to S3 (required for /__health, not for /__gtg)
    try {
        if (runThrottledTests) {
            health.checks[0].lastUpdated = new Date();
            await s3.putObject({
                Bucket: bucket,
                Key: 'health-check.txt',
                Body: 'Can write to S3'
            }).promise();
        }
    } catch (e) {
        health.checks[0].ok = false;
        health.checks[0].checkOutput = `Can not write to S3 bucket named "${bucket}".`;
    }

    // Return /__health
    return {
        statusCode: 200,
        body: JSON.stringify(health),
        headers: {
            'Cache-Control': 'no-store, private',
            'Content-Type': 'application/json;charset=utf-8'
        }
    };
});
