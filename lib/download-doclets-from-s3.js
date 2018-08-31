'use strict';

const AWS = require('aws-sdk');
const env = process.env;

module.exports = (repoId, versionId, language) => {
    const docletType = language === 'scss' ? 'sassdoc' : `${language}doc`;
    const s3 = new AWS.S3({
        accessKeyId: env.AWS_ACCESS_ID,
        secretAccessKey: env.AWS_SECRET
    });
    return new Promise((resolve, reject) => {
        s3.getObject({
            Bucket: env.AWS_DOCLET_BUCKET,
            Key: `${docletType}/${repoId}/${versionId}.json`
        }, (error, responseData) => {
            // @todo log error
            if(error) {
                reject(error);
            }
            resolve(responseData && responseData.Body ? responseData.Body.toString('utf8') : null);
        });
    });
};
