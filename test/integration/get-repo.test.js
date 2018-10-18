/* eslint-env mocha */

'use strict';

const process = require('process');
const request = require('supertest');
const env = require('../../env.js')();
const endpoint = process.env.INTEGRATION_ENDPOINT;
const codedocsApiKey = env.CODEDOCS_API_KEY;

const expectedJsDocs = require('./expectations/jsdoc');
const expectedNonModuleJsDocs = require('./expectations/jsdoc-non-module');
const expectedSassDocs = require('./expectations/sassdoc');

console.log(`Testing against "${endpoint}".`);

const expectedDocletCacheControl = 'public, s-maxage=31536000, max-age=604800, stale-while-revalidate=604800, stale-if-error=604800';

describe('GET jsdoc/[componentId]', function () {

    it('responds with JSDoc doclets (request #1, generates doclets, no cache i.e. in S3)', () => {
        return request(endpoint)
            .get('/jsdoc/o-test-component@v1.0.31')
            .set('x-api-key', codedocsApiKey)
            .expect(200, expectedJsDocs)
            .expect('Content-Type', 'application/json;charset=utf-8')
            .expect('Cache-Control', expectedDocletCacheControl);
    });

    it('responds with JSDoc doclets (request #2, may fetch doclets from catche i.e. from S3)', () => {
        return request(endpoint)
            .get('/jsdoc/o-test-component@v1.0.31')
            .set('x-api-key', codedocsApiKey)
            .expect(200, expectedJsDocs)
            .expect('Content-Type', 'application/json;charset=utf-8')
            .expect('Cache-Control', expectedDocletCacheControl);
    });

    it('responds with 404 when component has no JS', () => {
        return request(endpoint)
            .get('/jsdoc/o-test-component@v1.0.33')
            .set('x-api-key', codedocsApiKey)
            .expect(404, '"o-test-component@v1.0.33" does not have "js" to generate codedocs for.')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Cache-Control', 'no-cache');
    });

    it('responds with 404 when the requested component does not exist', () => {
        return request(endpoint)
            .get('/jsdoc/o-not-a-real-component-2018@v1.0.0')
            .set('x-api-key', codedocsApiKey)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Cache-Control', 'no-cache')
            .expect(404, 'Could not find repository for Origami component "o-not-a-real-component-2018@v1.0.0". Not Found');
    });

    it('responds with JSDoc doclets for a component with type "null"', () => {
        return request(endpoint)
            .get('/jsdoc/origami-repo-data-client-node@1.5.0')
            .set('x-api-key', codedocsApiKey)
            .expect(200, expectedNonModuleJsDocs)
            .expect('Content-Type', 'application/json;charset=utf-8')
            .expect('Cache-Control', expectedDocletCacheControl);
    });

    it('responds with a 404 error for a component of type "imageset"', () => {
        return request(endpoint)
            .get('/jsdoc/origami-flag-images@1.0.1')
            .set('x-api-key', codedocsApiKey)
            .expect(404, '"origami-flag-images@1.0.1" is of type "imageset", only "module" or "null" types are supported.')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Cache-Control', 'no-cache');
    });

    it('responds with a 404 error for a component of type "service"', () => {
        return request(endpoint)
            .get('/jsdoc/origami-repo-data@80.0.0')
            .set('x-api-key', codedocsApiKey)
            .expect(404, '"origami-repo-data@80.0.0" is of type "service", only "module" or "null" types are supported.')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Cache-Control', 'no-cache');
    });
});

describe('GET sassdoc/[componentId]', function () {
    it('responds with SassDoc doclets (request #1, generates doclets, no cache i.e. in S3)', () => {
        return request(endpoint)
            .get('/sassdoc/o-test-component@v1.0.31')
            .set('x-api-key', codedocsApiKey)
            .expect(200, expectedSassDocs)
            .expect('Content-Type', 'application/json;charset=utf-8')
            .expect('Cache-Control', expectedDocletCacheControl);
    });

    it('responds with SassDoc doclets (request #2, may fetch doclets from catche i.e. from S3)', () => {
        return request(endpoint)
            .get('/sassdoc/o-test-component@v1.0.31')
            .set('x-api-key', codedocsApiKey)
            .expect(200, expectedSassDocs)
            .expect('Content-Type', 'application/json;charset=utf-8')
            .expect('Cache-Control', expectedDocletCacheControl);
    });

    it('responds with 404 when component has no SCSS', () => {
        return request(endpoint)
            .get('/sassdoc/o-test-component@v1.0.32')
            .set('x-api-key', codedocsApiKey)
            .expect(404, '"o-test-component@v1.0.32" does not have "scss" to generate codedocs for.')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Cache-Control', 'no-cache');
    });

    it('responds with 404 when component does not exist', () => {
        return request(endpoint)
            .get('/sassdoc/o-not-a-real-component-2018@v1.0.0')
            .set('x-api-key', codedocsApiKey)
            .expect(404, 'Could not find repository for Origami component "o-not-a-real-component-2018@v1.0.0". Not Found')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Cache-Control', 'no-cache');
    });

    it('responds with a 404 error for a component of type "imageset"', () => {
        return request(endpoint)
            .get('/sassdoc/origami-flag-images@1.0.1')
            .set('x-api-key', codedocsApiKey)
            .expect(404, '"origami-flag-images@1.0.1" is of type "imageset", only "module" or "null" types are supported.')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Cache-Control', 'no-cache');
    });

    it('responds with a 404 error for a component of type "service"', () => {
        return request(endpoint)
            .get('/sassdoc/origami-repo-data@80.0.0')
            .set('x-api-key', codedocsApiKey)
            .expect(404, '"origami-repo-data@80.0.0" is of type "service", only "module" or "null" types are supported.')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Cache-Control', 'no-cache');
    });
});
