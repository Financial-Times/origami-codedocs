'use strict';

const getResponse = require('../lib/codedocs-response');
const Jsdoc = require('../lib/jsdoc');
const Sentry = require('../lib/sentry');

exports.handler = Sentry.AWSLambda.wrapHandler(async (event) => {
    const componentKey = decodeURIComponent(event.pathParameters.componentId);
    return await getResponse(componentKey, new Jsdoc);
});
