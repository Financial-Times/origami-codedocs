/* eslint-env mocha */

'use strict';

const process = require('process');
const request = require('supertest');
const host = process.env.HOST;

const expectedJsDocs = require('./expectations/jsdoc');
const expectedSassDocs = require('./expectations/sassdoc');

console.log(`Testing against host "${host}".`);

describe('GET jsdoc/[componentId]', function () {
    it('responds with JSDoc doclets (request #1, generates doclets, no cache i.e. in S3)', () => {
        return request(host)
            .get('/jsdoc/o-test-component@v1.0.31')
            .expect(200, expectedJsDocs)
            .expect('Content-Type', 'application/json;charset=utf-8');
    });

    it('responds with JSDoc doclets (request #2, may fetch doclets from catche i.e. from S3)', () => {
        return request(host)
            .get('/jsdoc/o-test-component@v1.0.31')
            .expect(200, expectedJsDocs)
            .expect('Content-Type', 'application/json;charset=utf-8');
    });

    it('responds with 404 when component has no JS', () => {
        return request(host)
            .get('/jsdoc/o-test-component@v1.0.33')
            .expect(404, '"o-test-component@v1.0.33" does not have "js" to generate codedocs for.')
            .expect('Content-Type', 'text/html; charset=utf-8');
    });

    it('responds with 404 when the requested component does not exist', () => {
        return request(host)
            .get('/jsdoc/o-not-a-real-component-2018@v1.0.0')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(404, 'Could not find repository for Origami component "o-not-a-real-component-2018@v1.0.0". Not Found');
    });
});

describe('GET sassdoc/[componentId]', function () {
    it('responds with SassDoc doclets (request #1, generates doclets, no cache i.e. in S3)', () => {
        return request(host)
            .get('/sassdoc/o-test-component@v1.0.31')
            .expect(200, expectedSassDocs)
            .expect('Content-Type', 'application/json;charset=utf-8');
    });

    it('responds with SassDoc doclets (request #2, may fetch doclets from catche i.e. from S3)', () => {
        return request(host)
            .get('/sassdoc/o-test-component@v1.0.31')
            .expect(200, expectedSassDocs)
            .expect('Content-Type', 'application/json;charset=utf-8');
    });

    it('responds with 404 when component has no SCSS', () => {
        return request(host)
            .get('/sassdoc/o-test-component@v1.0.32')
            .expect(404, '"o-test-component@v1.0.32" does not have "scss" to generate codedocs for.')
            .expect('Content-Type', 'text/html; charset=utf-8');
    });

    it('responds with 404 when component does not exist', () => {
        return request(host)
            .get('/sassdoc/o-not-a-real-component-2018@v1.0.0')
            .expect(404, 'Could not find repository for Origami component "o-not-a-real-component-2018@v1.0.0". Not Found')
            .expect('Content-Type', 'text/html; charset=utf-8');
    });
});
