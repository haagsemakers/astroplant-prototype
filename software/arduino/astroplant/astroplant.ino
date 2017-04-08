// Astroplant Prototype by Haagse Makers
//
// To the extent possible under law, the person who associated CC0 with
// Astroplant Prototype has waived all copyright and related or neighboring rights
// to Astroplant Prototype.
//
// You should have received a copy of the CC0 legalcode along with this
// work.  If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.

#include <Wire.h>
#include <Digital_Light_TSL2561.h>

#define SLAVE_ADDRESS 0x04

int ledStatus = 0;
int lightValue = 0;

void setup() {
  pinMode(13, OUTPUT);
  Serial.begin(9600);
  Serial.println("Initiating ... ");
  TSL2561.init();

  // Initiatlize i2c as slave
  Wire.begin(SLAVE_ADDRESS);
  Serial.println("Registered as slave device");
  // Define callbacks for i2c communication
  Wire.onRequest(sendData);
  Serial.println("Wire callbacks registered ");

  // Initialize light sensor
  Serial.println("Initializing digital light sensor ... ");
  TSL2561.init();
  Serial.println("---");
  Serial.println("Welcome to the Astroplant Arduino Controller!");
  Serial.println("---");
}


// Read sensor data in the loop.
void loop() {
  Serial.print("The Light value is: ");
  lightValue = TSL2561.readVisibleLux();
  Serial.println(lightValue);
  delay(1000);
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
  // Switch status led
  if (ledStatus == 0) {
    digitalWrite(13, HIGH);
    ledStatus = 1;
   } else {
    digitalWrite(13, LOW);
    ledStatus = 0;
  }

  String stringOne = String(lightValue);
  char charBuf[stringOne.length()+1];
  stringOne.toCharArray(charBuf, stringOne.length()+1);

  Wire.write(charBuf);
}
