'use strict';

const SentryServerless = require('@sentry/serverless');
const env = process.env;

SentryServerless.AWSLambda.init({
    dsn: env.SENTRY_DSN,
    environment: env.STAGE,
});

module.exports = SentryServerless;
