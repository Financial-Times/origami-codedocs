"use strict";

const AWS = require('aws-sdk');

const AWSProvider = class AWSProvider {
	constructor(serverless) {
		this.serverless = serverless;
		this.s3 = function () {
			const environment = serverless.service.provider.environment;
			return new AWS.S3({
				accessKeyId: environment['AWS_ACCESS_ID'],
				secretAccessKey: environment['AWS_SECRET']
			});
		};
	}

	validate() {
		const errors = [];
		if (typeof this.region !== "string") {
			errors.push(`Property: region must be a string. Found ${typeof this.region}`);
		}
		if (typeof this.stage !== "string") {
			errors.push(`Property: stage must be a string. Found ${typeof this.stage}`);
		}
		if (errors.length > 0) {
			const errMessage = "AwsConfigFromServerless: Error validating serverless config\n" + errors.join("\n");
			throw errMessage;
		}
	}
};

module.exports = AWSProvider;
