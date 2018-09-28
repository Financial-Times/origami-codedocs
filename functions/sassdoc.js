'use strict';

const getResponse = require('../lib/codedocs-response');
const Sassdoc = require('../lib/sassdoc');
const Raven = require('raven');
const RavenLambdaWrapper = require('serverless-sentry-lib');

exports.handler = RavenLambdaWrapper.handler(Raven, async (event) => {
    const componentKey = decodeURIComponent(event.pathParameters.componentId);
    return await getResponse(componentKey, new Sassdoc);
});
