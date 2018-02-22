'use strict';

//const aws = require('aws-sdk');

//var s3 = new aws.S3();

console.log('init service!');

module.exports.hello = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Service has been deployed successfully! v0.0.1',
            input: event,
            context: context
        }),
    };
    callback(null, response);
};

module.exports.uploadImage = (event, context, callback) => {
    console.log('event: ', event);
    console.log('context: ', context);
    callback(null, {});
}
