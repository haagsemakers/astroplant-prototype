// Astroplant Prototype by Haagse Makers
//
// To the extent possible under law, the person who associated CC0 with
// Astroplant Prototype has waived all copyright and related or neighboring rights
// to Astroplant Prototype.
//
// You should have received a copy of the CC0 legalcode along with this
// work.  If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.



/***********
 * 
 * LIBRARIES 
 * 
 ***********/
#include <Wire.h>
#include <Digital_Light_TSL2561.h>  // Digital Light
#include "Seeed_BME280.h"           // Barometer


/***********
 * 
 * CONSTANTS
 * 
 ***********/
#define WATER_SENSOR 8
#define WATER_TEMP 2 

const byte MY_ADDRESS = 4;
const byte LED = 13;


/***********
 * 
 * VARIABLES
 * 
 ***********/
int ledStatus;
boolean waterStatus; 
unsigned long lightValue;
float airTemperature;
float airPressure;
float airHumidity;
float altitude;
float waterTemp;

// Barometer sensor
BME280 myBarometer;



/*******
 * 
 * SETUP 
 * 
 *******/
void setup() {
  // Setup Wire 
  Wire.begin(MY_ADDRESS);
  // Setup pins
  pins_init();
  // Begin Serial communication 
  Serial.begin(9600);
  while (!Serial); 
  Serial.println("Initiating ... ");
  // Setup sensors
  sensor_init(); 
  // Define callbacks for i2c communication
  Wire.onRequest(sendData);
  Serial.println("Wire callbacks registered ");
  // Setup done 
  Serial.println("Welcome to the Astroplant Arduino Controller!");
  Serial.println("--- Setup complete ---");  
}


/***********
 * 
 * MAIN LOOP
 * 
 ***********/
void loop() {

  // Read sensor values 
  readWaterStatus();   // Check if sensor touches water
  readDigitalLight();  // Read the light 
  readBarometer(); 
  // readDigitalInfrared(); 
  // readWaterTemp();      // Read the temperature of the water
  
  printValues(); 
  
  delay(10000);
}


void pins_init() {
  // Init pins 
  pinMode(LED, OUTPUT);
  pinMode(WATER_SENSOR, INPUT);
  pinMode(WATER_TEMP, INPUT);
}

void sensor_init() {
  // Initialize the digital light sensor
  Serial.println("Initializing digital light sensor ... ");
  TSL2561.init();

  if(!myBarometer.init()){
    Serial.println("Barometer sensor error!");
  } else {
    Serial.println("Barometer Sensor initiated");
  }
}

void printValues() {
  Serial.println("Current values: "); 
  //  Serial.print("Water temp: "); 
  //  Serial.println(waterTemp); 
  Serial.print("Water status: "); 
  Serial.println(waterStatus); 
  Serial.print("Digital Light: "); 
  Serial.println(lightValue); 
  Serial.print("Air Temperature: ");
  Serial.print(airTemperature); 
  Serial.println("C");//The unit for  Celsius because original arduino don't support speical symbols
  Serial.print("Pressure: ");
  Serial.print(airPressure); 
  Serial.println("Pa");
  Serial.print("Altitude: ");
  Serial.print(altitude); 
  Serial.println("m");
  Serial.print("Humidity: ");
  Serial.print(airHumidity); 
  Serial.println("%");
  Serial.println("---"); 
}


/***********************
 * 
 * READ SENSOR FUNCTIONS
 * 
 ***********************/

/***
 * Function: Determine whether the sensor is exposed to the water
 * Parameter:-void
 * Return: -boolean,if it is exposed to the water,it will return ture.
 * 
 **/
boolean readWaterStatus() {
  if(digitalRead(WATER_SENSOR) == LOW)
  waterStatus = true;
  else waterStatus = false;
}



// Read the digital Light Sensor 
// Returns: unsigned long
void readDigitalLight() {
  lightValue = TSL2561.readVisibleLux();  
}


// Read the Barometer Sensor 
// Returns: 
void readBarometer() {
  //get and print temperatures
  airTemperature = myBarometer.getTemperature();
  //get and print atmospheric pressure data
  airPressure = myBarometer.getPressure();
  //get and print altitude data
  altitude = myBarometer.calcAltitude(airPressure);
  //get and print humidity data
  airHumidity = myBarometer.getHumidity();
}


// Read Digital Infrared Temperature (MLX90615_H)
// Returns: 
void readDigitalInfrared() {
  
}





float readWaterTemp() {
  return digitalRead(WATER_TEMP); 
}

/**
  * In the onReceive() function, DO NOT Serial print,
  * or DELAY or anything other than access private variables.
  * call to Delay would hang because the delay() function relies on the timer interrupt,
  * Since we are already in an interrupt, NO Other interrupt can happen until this one completes.
  * The OnReceive() function is an interrupt service routine.
  * It will interrupt any executing code.
  * Think about what would happen if the foreground process was in the middle of a Serial.print() and
  * you tried to do inject another Serial.print() into the middle?
  * Bad Things!  None of the Arduino library routines are interrupt safe.
  * So, the only things you can safely do in the onReceive() function is change private variables,
  * atomically access isolated hardware.
  */

void sendData() {
  // Switch the status led
  switchStatusLed(); 
  // Create the values data string 
  String dataString = createDataString();
  // Convert string to char buffer 
  char charBuf[dataString.length()+1];
  dataString.toCharArray(charBuf, dataString.length()+1);
  // Send the data over the I2C wire 
  Wire.write(charBuf);
}


// 
void switchStatusLed() {
  // Switch status led
  if (ledStatus == 0) {
    digitalWrite(13, HIGH);
    ledStatus = 1;
   } else {
    digitalWrite(13, LOW);
    ledStatus = 0;
  }
}


// 
String createDataString() {
  
  String values; 
  values += "ws:";
  values += waterStatus;
  values += ";";

  values += "lv:";
  values += lightValue;
  values += ";";

  values += "at:";
  values += airTemperature;
  values += ";";

  values += "ap:";
  values += airPressure;
  values += ";";
  
  values += "ah:";
  values += airHumidity;
  values += ";";
  
  values += "alt:";
  values += altitude;
  values += ";";
  
  values += "wt:";
  values += waterTemp;
  values += ";";
  
  return values; 
}

