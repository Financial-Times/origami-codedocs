<!--
    Written in the format prescribed by https://github.com/Financial-Times/runbook.md.
    Any future edits should abide by this format.
-->
# Origami Codedocs

Generates and stores codedocs (JsDoc and SassDoc) for Origami components.

## Code

origami-codedocs

## Service Tier

Bronze

## Lifecycle Stage

Production

## Primary URL

https://origami-codedocs.in.ft.com/prod/

## Host Platform

AWS

## Contains Personal Data

No

## Contains Sensitive Data

No

<!-- Placeholder - remove HTML comment markers to activate
## Can Download Personal Data
Choose Yes or No

...or delete this placeholder if not applicable to this system
-->

<!-- Placeholder - remove HTML comment markers to activate
## Can Contact Individuals
Choose Yes or No

...or delete this placeholder if not applicable to this system
-->

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

This is the service which generates the code documentation on <https://registry.origami.ft.com>

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

To release merge to the master branch. CI will run tests and deploy changes to AWS and update the Fastly service if needed.

## Key Management Details

Create deploy keys for the "DeployUserFor_Serverless_origami-codedocs" user under the "ft-tech-origami-prod" AWS account.

<!-- Placeholder - remove HTML comment markers to activate
## Heroku Pipeline Name
Enter descriptive text satisfying the following:
This is the name of the Heroku pipeline for this system. If you don't have a pipeline, this is the name of the app in Heroku. A pipeline is a group of Heroku apps that share the same codebase where each app in a pipeline represents the different stages in a continuous delivery workflow, i.e. staging, production.

...or delete this placeholder if not applicable to this system
-->