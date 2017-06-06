# Request Demo

This repo contains a _serverless_ lambda deployment configuration and a request class with example extensions. The [AWS Cli tool](https://aws.amazon.com/cli/) is required to run the lambda deployment and you will need relevant [IAM](https://aws.amazon.com/iam/) permissions to create all the required assets.

## Prerequisites

```
npm install -g serverless webpack ts-node typescript
```

## Setup

```
npm install
```

## Serverless

I have included a [serverless]() lambda stack example to show how typescript can be useful for creating lambda functions. However due to the purpose of the test needing delayed requests, lambdas aren't really ideal for this, unless using persistance of some kind.

## Webpack

Webpack is used to bundle the typescript and reduce deployment size for serverless.

## IAM

To deploy you will need an access key and secret to deploy the lambda, with a user which has the relevant permissions.

## Note

I used serverless to demonstrate how to deploy lambda really easily with api gateway configuration. This isn't neccessarily the way I would approach deployment if AWS lambda were to be used. Serverless is slow to deploy, but is really good for working with other aspects like API Gateway and S3. [APEX](https://github.com/apex/apex) is something I would like to look into as it is really fast but doesn't have as good integration for other services. However API Gateway can import [Swagger](http://swagger.io/) configurations, and setting up IAM roles and S3 buckets manually isn't as slow as all the time you woud loose deploying serverless.

## Tests

```
npm test
```

## TODO

Complete generics for return format function
Create additional example of class extension using generics