'use strict';

var aws = require('aws-sdk');
var dynamoDB = new aws.DynamoDB();

/*****
 * Demonstrates a simple HTTP endpoint using API Gateway.
 *
 *
 */
exports.handler = function (event, context, callback) {

    // check if there is a kitId present in the path
    var kitId;
    if (event.params && event.params.path && event.params.path.kitId) {
      kitId = event.params.path.kitId;
    }

    if (kitId) {
      // GET item
      getItem(kitId, function(err,res){
        console.log(err);
        console.log(res);
        callback(err,res);
      });
    } else {
      // GET index
      getItems(kitId, callback);
    }
};


// Get latest sensor data for this item.
function getItem(id, cb) {
  // Sensor data is stored in the DynamoDB wmg_sensordata table. Get all datapoints for the given kitId.
  console.log('getting item ', id);
  var params = {
    TableName: 'wmg_sensordata',
    KeyConditionExpression: "UID = :uid",
    ExpressionAttributeValues: {
      ":uid": {
        S: id
      }
    },
    Limit: 100,
    ScanIndexForward: false
  };
  dynamoDB.query(params, function(err,res) {
    cb(err,res);
  });

}


// Get a list of items with their params.
function getItems(params, cb) {
  // Kits are things, get a list of things from AWS-IOT

  dynamoDB.getItem({
      "Key": {
          "UID":  { "S": "001" },
          "Timestamp": { "NULL": true }
      },
      "TableName": "wmg_sensordata",
  }, cb);
}
