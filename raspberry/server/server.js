// Astroplant Prototype by Haagse Makers
//
// To the extent possible under law, the person who associated CC0 with
// Astroplant Prototype has waived all copyright and related or neighboring rights
// to Astroplant Prototype.
//
// You should have received a copy of the CC0 legalcode along with this
// work.  If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.


// Load dependencies
var path = require('path');
var awsIot = require('aws-iot-device-sdk');
var i2c = require('i2c');
var express = require('express');
var logger = require('morgan')

// variable for latest sensordata
var sensorData = {};

// Set the i2c device
var device1 = new i2c(0x18, {device: '/dev/i2c-1', debug: false});
device1.setAddress(0x4);

// Set up the local webserver
var app = express();
app.use(logger('dev'))
app.use(express.static('express/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/express/views'));


// Load configuration settings
var settings = require(path.join(__dirname, '/config.json'));

// The name of the thing at AWS
var myThingName = 'wmg-' + settings.UID;

// Connect to the thing at AWS
var device = awsIot.device({
  host: settings.host,
  port: 8883,
  clientId: myThingName,
  thingName: myThingName,
  caCert: path.join(__dirname, settings.caCert),
  clientCert: path.join(__dirname, settings.clientCert),
  privateKey: path.join(__dirname, settings.privateKey),
  region: settings.region
});

// Handle the connection of the thing at AWS
device.on('connect', function() {
  console.log(myThingName + " connected.");
  initiate();
});

// Start the main server proces
function initiate() {

  console.log('Initiating timeout for sensordata. ' + settings.sendInterval);
  setInterval(function () {
    // Fetch sensor data
    console.log('Reading sensor data ... ');
    readSensors(function(data) {
      // Process the sensor data
      console.log('Processing the sensor data ... ');
      processSensorData(data, function(data) {
        // Send the data to AWS
        console.log('Sending the sensor data to AWS ... ');
        sensorData = data;
        sendSensorData(data, function(result) {
          console.log('Sending to AWS result: ');
          console.log(result);
        });
      });
    });
  }, settings.sendInterval);
}


// Read sensor data from the Arduino over I2C
function readSensors(cb) {
  var result;
  device1.readBytes(0xF3, 6, function(err,data){
    if (err) { console.log(err); }
    console.log(data);
    for (var i=6; i>0; i--) {
      if (data[i -1].toString() == '255') {
        data = data.slice(0,i-1);
      }
    };
    result = data.toString();
    console.log('light value:',  result);
    cb({
      light:result
    });
  });
}


// incoming: string, output: valid aws json
function processSensorData(data, cb) {
  // Process incoming data
  // data = JSON.stringify(data);

  cb(data);
}


// Send the sensor data to AWS
function sendSensorData(data, cb) {
  console.log(JSON.stringify(data));
  device.publish('wmg/001', JSON.stringify(data));

  cb(true);
}




// Local API
app.get('/', function (req, res) {
  res.render('index', { title: 'Astroplant Controller', message: 'Astroplant Controller', data: sensorData })
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
});



// ---------------- ---------------- ---------------- ----------------
// EXTRAS

// Code below just logs messages for info/debugging
device.on('status',function(thingName, stat, clientToken, stateObject) {
  console.log('received '+stat+' on '+thingName+':'+JSON.stringify(stateObject));
});

device.on('update',function(thingName, stateObject) {
  console.log('received update '+' on '+thingName+': ' + JSON.stringify(stateObject));
});

device.on('delta',function(thingName, stateObject) {
  console.log('received delta '+' on '+thingName+': ' + JSON.stringify(stateObject));
});

device.on('timeout', function(thingName, clientToken) {
  console.log('received timeout for '+ clientToken);
});

device.on('close', function() {
  console.log('close');
});

device.on('reconnect', function() {
  console.log('reconnect');
});

device.on('offline', function() {
  console.log('offline');
});

device.on('error', function(error) {
  console.log('error', error);
});
