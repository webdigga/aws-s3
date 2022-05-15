// Load the SDK for node
const AWS = require( 'aws-sdk' );

// Set the region
AWS.config.update({
    region: 'eu-west-2'
});

// Create S3 service object
s3 = new AWS.S3({
    apiVersion: '2006:03:01'
});

// Create the parameters for calling createBucket
const bucketParams = {
    Bucket: process.argv[2]
}

// Call S3 to list the buckets
s3.createBucket(bucketParams, ( err, data ) => {
    if( err ) {
        console.log( 'Error', err );
    } else {
        console.log( 'Success', data.Location );
    }
});
