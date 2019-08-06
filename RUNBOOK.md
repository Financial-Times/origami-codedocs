# Origami Codedocs

Generates and stores codedocs (JsDoc and SassDoc) for Origami components.

## Service Tier

Bronze

## Lifecycle Stage

Production

## Primary URL

https://origami-codedocs.in.ft.com/prod/

## Replaces

* ft-sassdoc-service

## Host Platform

AWS

## Contains Personal Data

no

## Contains Sensitive Data

no

## Delivered By

origami-team

## Supported By

origami-team

## Known About By

* rowan.manning
* jake.champion
* lee.moody

## Dependencies

* github

## Healthchecks

* origami-codedocs.in.ft.com-https

## Failover Architecture Type

NotApplicable

## Failover Process Type

NotApplicable

## Failback Process Type

NotApplicable

## Data Recovery Process Type

NotApplicable

## Release Process Type

FullyAutomated

## Rollback Process Type

FullyAutomated

## Key Management Process Type

Manual

## Architecture

An AWS Lambda checks the Origami Repo Data API that the request is for an Origami component. If true it returns codedocs for that component from AWS S3. If the codedocs do not exist the Lambda function pulls code from Github and generates the codedocs, storing them is AWS S3 for future requests. This is backed by Fastly.

## More Information

This is the service which generates the code documentation on [https://registry.origami.ft.com](https://registry.origami.ft.com)

## First Line Troubleshooting

It is most likely that the Origami Repo Data API or the Github API which this application relies on are temporarily unavailable. If this is the case no immediate action is needed, please refer to the health checks for more information.

## Second Line Troubleshooting

Please refer to the health checks.

## Monitoring

In addition to AWS logs, errors are reported to Sentry.

## Failover Details

n/a

## Data Recovery Details

n/a

## Release Details

To release merge to the master branch. CircleCI will run tests and deploy changes to AWS and update the Fastly service if needed.

## Key Management Details

Create deploy keys for the "DeployUserFor_Serverless_origami-codedocs" user under the "ft-tech-origami-prod" AWS account.

