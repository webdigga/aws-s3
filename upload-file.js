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

// Call S3 to retrieve upload file to specified bucket
const uploadParams = {
    Bucket: process.argv[2],
    Key: '',
    Body: ''
};
const file = process.argv[3];

// Configure the file stream and obtain the upload parameters
const fs = require( 'fs' );
const fileStream = fs.createReadStream( file );
fileStream.on('error', ( error ) => {
    console.log( 'File Error', error );
});
uploadParams.Body = fileStream;
const path = require( 'path' );
uploadParams.Key = path.basename( file );

// Call S3 to list the buckets
s3.upload(uploadParams, ( err, data ) => {
    if( err ) {
        console.log( 'Error', err );
    } else {
        console.log( 'Upload Success', data.Location );
    }
});
