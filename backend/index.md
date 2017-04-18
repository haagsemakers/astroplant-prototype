---
layout: default
title: Backend
---
The backend of AstroPlant is a cloud-based solution based on Microservices architecture.

We use Amazon Web Services (AWS) to perform all the backend processing.

The backend consists of the following elements:
 - API Gateway: Publish api endpoints, handle permissions and actions.
 - Lambda Functions: Perform a function based on the request.
 - AWS-IOT: A solution to handle IoT devices in the cloud.
 - DynamoDB: noSql storage

## Backend overview
### API Gateway
The api gateway is the REST interface to retrieve data from the database and data about IOT things. At this moment the API is very limited. You can get info about a kit, and retrieve the latest datapoints. Based on further development of the AstroPlant this API can be extended.

Current API endpoints:
 - GET /kits -> Get a listing of all the kits
 - GET /kits/{id} -> Get details of a specific kit
 - GET /kits/{id}/data -> Get the latest data points of the selected kit

### Lambda functions
These functions are stand alone micro-services. These functions can be called by AWS IoT, API Gateway and DynamoDB triggers.
Check out the code for the current lambda functions.

### AWS IoT
Each AstroPlant kit is a 'thing' in AWS IoT. Using key certificates, it is possible to connect the raspberry directly with AWS IOT. This makes it possible to send data to the online AWS IoT thing. The message broker at AWS IoT handles the request. In most cases this will be the storage of data in the database.

### DynamoDB
The database is a noSQL database. The structure is at the moment:

      {
        id: {kit id},
        details: {
          id: {id},
          ip: {latest ip address},
          admin: {email},
          description: {kit description}
        },
        data: {
          sensor1: [{
            timestamp: {time},
            value: {value}
          }],
          sensor2: [{
            timestamp: {time},
            value: {value}
          }],
          sensor3: [{
            timestamp: {time},
            value: {value}
          }],
          sensor4: [{
            timestamp: {time},
            value: {value}
          }],
        }
      }

## Backend installation
Login to your [AWS console](https://console.aws.amazon.com)

Got to the [AWS IOT Service](https://eu-central-1.console.aws.amazon.com/iotv2/home?region=eu-central-1#/dashboard)
<img src="{{site.baseurl}}/assets/img/backend-01.png" class="img-fluid">

Create a [new thing](https://eu-central-1.console.aws.amazon.com/iotv2/home?region=eu-central-1#/create/thing)
<img src="{{site.baseurl}}/assets/img/backend-02.png" class="img-fluid">
<img src="{{site.baseurl}}/assets/img/backend-03.png" class="img-fluid">

Create a certificate for the new thing
<img src="{{site.baseurl}}/assets/img/backend-04.png" class="img-fluid">
<img src="{{site.baseurl}}/assets/img/backend-05.png" class="img-fluid">
Download the three certificates and activate the root certificate

Copy the certificates to the /certs/ folder on the raspberry pi. Keep them safe and secure!  

Create a policy for the certficate and attach it to the certificate

    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "iot:*",
          "Resource": "*"
        }
      ]
    }
