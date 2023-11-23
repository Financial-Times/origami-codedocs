'use strict';

const path = require('path');
const dotenvSafe = require('dotenv-safe');

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'production';
}

const env = dotenvSafe.config({
    path: path.join(__dirname, './.env'),
    example: path.join(__dirname, './env.example')
}).parsed;

module.exports = () => {
    return {
        AWS_ACCOUNT_ID: process.env.AWS_ACCOUNT_ID || env.AWS_ACCOUNT_ID,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || env.AWS_SECRET_ACCESS_KEY,
        NODE_ENV: process.env.NODE_ENV || env.NODE_ENV,

        SENTRY_DSN: process.env.SENTRY_DSN || env.SENTRY_DSN,

        CODEDOCS_API_KEY_NAME: process.env.CODEDOCS_API_KEY_NAME || env.CODEDOCS_API_KEY_NAME,
        CODEDOCS_API_KEY: process.env.CODEDOCS_API_KEY || env.CODEDOCS_API_KEY,

        FASTLY_PROD: process.env.FASTLY_PROD || env.FASTLY_PROD,
        FASTLY_SERVICE_PROD: process.env.FASTLY_SERVICE_PROD || env.FASTLY_SERVICE_PROD,
        FASTLY_BACKEND_NAME_PROD: process.env.FASTLY_BACKEND_NAME_PROD || env.FASTLY_BACKEND_NAME_PROD
    };
};
