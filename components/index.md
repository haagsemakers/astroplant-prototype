---
layout: default
title: Components
---

This pages provides an overview of the components of the current development version of the AstroPlant kit.
For this prototype version we use an Arduino Pi 0W for the main process, and an extra Arduino to communicate with all the sensors.  

Because of the small form factor and the low costs, the raspberry zero is very suitable for the job. For the next version, the Arduino could be eliminated. By connecting the sensors directly to the GPIO pins of the RPi, and/or by creating a dedicated sensor shield for the raspberry.

## Overview
<img src="https://docs.google.com/drawings/d/1ZLDQU9GknBh5WbjXxTsYQXWPzd7A0CwQDUdHlPiAT8o/pub?w=960&amp;h=720" class="img-fluid">

<img src="{{site.baseurl}}/assets/img/prototype-01.jpg" class="img-fluid">

## Components list
The current list of components is:

  - Casing
    - [IKEA Krydda Kweekeenheid](http://ikea.com/nl/nl/catalog/products/50318440/)
    - [IKEE Växer planteninzet](http://www.ikea.com/nl/nl/catalog/products/10318729/)
    - Softboard cut to the right size
  - The Brain
    - [Raspberry Pi Zero W	KW-1795](https://www.kiwi-electronics.nl/raspberry-pi-zero-w)
    - [Transcend 8GB Class 10 MicroSDHC - UHS-1 - 60MB/s	TS8GUSDCU1](https://www.kiwi-electronics.nl/Transcend-8GB-Class-10-MicroSDHC-UHS-1)
    - [Arduino M0	ARD-A000103](https://www.kiwi-electronics.nl/arduino-m0)
    - [Grove - Base Shield voor Arduino V2	SS-103030000](https://www.kiwi-electronics.nl/grove-base-shield)

  - Power
    - [Raspberry Pi Voeding 5.1V/2.5A - 12.5W - MicroUSB - EU/UK Plug	KW-1599](https://www.kiwi-electronics.nl/rpi-psu-5-1v-2-5a--eu-uk)
    - [Grove - Relay	SS-103020005](https://www.kiwi-electronics.nl/grove-relay)
  - Sensors
    - [Raspberry Pi Zero W NoIR Camera](https://www.kiwi-electronics.nl/raspberry-pi-noir-camera-board-v2-8mp)
    - [Grove - Digital Light Sensor	SS-101020030](https://www.kiwi-electronics.nl/grove-digital-light-sensor)
    - [Waterbestendige DS18B20 digitale temperatuursensor + weerstand ADA-381](https://www.kiwi-electronics.nl/Waterproof-DS18B20-Digital-temperature-sensor-plus-resistor)
    - [Grove - Temp&Humi&Barometer Sensor (BME280) SS-101020193](https://www.kiwi-electronics.nl/grove-temp-humi-barometer-sensor-bme280)
    - [Grove - Digital Infrared Temperature Sensor SS-101020077](https://www.kiwi-electronics.nl/grove-digital-infrared-temperature-sensor)
    - [Grove - Water Sensor	SS-101020018](https://www.kiwi-electronics.nl/grove-water-sensor)
  - Actuators
    - [LED RGB Strip-Addressable - 1M	MB-13406](https://www.kiwi-electronics.nl/led-rgb-strip-addressable-1m)
    - [Makeblock Cooling Fan	MB-14405](https://www.kiwi-electronics.nl/makeblock-cooling-fan)
  - Supplies
    - [4 pin Female Jumper to Grove 4 pin Conversion Cable - 5-pack	SS-110990028](https://www.kiwi-electronics.nl/grove-4-pin-female-jumper-to-grove-4-pin-conversion-cable-5-pack)  
    - pin headers
    - double sided tape
    - ducttape
    - insulation tape
    - micro-usb to usb cable (arduino to computer)
    - micro sd adapter
    - soldering iron

## Components documentation:
- Grove Digital Light Sensor:
  - [Seed Studio Wiki](http://wiki.seeed.cc/Grove-Digital_Light_Sensor/)
  - Input Voltage: 3.3 is possible, 5v is typical
  - Operating current:
  - Connect using I2C, address 0x29
  - [Library](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor)
- Grove Barometer Sensor
  - [Seed Studio Wiki](http://wiki.seeed.cc/Grove-Barometer_Sensor-BME280/)
  - Input Voltage: 3.3V or 5V
  - Operating current: 0.4mA
  - Connection: I2C (default), address 0x76
  - [library](https://github.com/Seeed-Studio/Grove_BME280)
- Grove Digital Infrared Temperature Sensor (Not working yet)
  - [Seed Studio Wiki](http://www.seeedstudio.com/wiki/Grove_-_Digital_Infrared_Temperature_Sensor)
  - Input Voltage: 3.3V or 5V
  - Operating current: 0.4mA
  - Connection: Since the sensor is factory calibrated with the digital SMBus compatible interface enabled,but the library is based on a soft i2c library,so you can use any digital pins on any AVR chip to drive the SDA and SCL lines.We use D2 as the SCL pin and D3 as the SDA pin in this demo code.
  - [Library](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)
- Grove Water Sensor
  - [Seed Studio Wiki](http://wiki.seeed.cc/Grove-Water_Sensor/)
  - Input Voltage: 3.3V or 5V
  - Operating current: 1.4mA
  - Connection: I2C

- DS18B20 Digital Temperature Sensor
  - Input Voltage: 3.0V to 5.5V
  - Operating Current: ..
  - [Example code](https://create.arduino.cc/projecthub/TheGadgetBoy/ds18b20-digital-temperature-sensor-and-arduino-9cc806)
  - [Library](https://github.com/milesburton/Arduino-Temperature-Control-Library)

- LED Light Strip
  - Input Voltage: 5V
  - Operating Current: 1.8A/m (maximum, depending on number of leds and brightness)
  - [Library](http://learn.makeblock.com/Makeblock-library-for-Arduino/index.html)
