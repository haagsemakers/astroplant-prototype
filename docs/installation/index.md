---
layout: docs
title: Installation
---

<div class="container">
  ## Hardware  
  ### Sensors & Arduino  
  ### Raspberry Pi  
  #### Installation  
  We use a Raspberry Pi Zero W. This is a low cost and small micro-computer with onboard wifi and bluetooth. The Raspberry is the heart of the Astroplant.
  For the prototype, we have to hardcode the wifi credentials for the location where the Astroplant is placed. It is possible to add multiple wifi access points.
  Use Pi Baker to install Raspbian to the sd-card.

  #### Configuration
  1. In the boot partition on your computer, add to the bottom of the `config.txt` file `dtoverlay=dwc2` on a new line, then save the file.
  2. Add a new blank file calles `ssh` to the root of the boot partition.
  3. Open `cmdline.txt` and insert `modules-load=dwc2,g_ether` after `rootwait`. This configuration is very picky with its formatting! Each parameter is seperated by a single space (it does not use newlines).
  4. Add `wpa_supplicant.conf` to the root of the sd-card. When starting up, Raspbian will use this file to setup the wifi. This version of the raspberry only works with 2.4GHz networks (not 5GHz!). Use the following contents (with your own credentials):

          country=GB
          ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
          update_config=1

          network={
          ssid="WorkSSID"
          psk="passwordWork"
          id_str="work"
          }
          network={
          ssid="HomeNetworkSSID"
          psk="passwordHome"
          id_str="home"
          }
  [Reference](https://gist.github.com/gbaman/975e2db164b3ca2b51ae11e45e8fd40a)

  ##### Access from local computer
  Look up the ipaddress of 'raspberrypi' in the router network list.
  Use SSH to login: pi@192.1.1.1 with the default password 'raspberry'.

  ##### Change the hostname

      sudo raspi-config
      --> change hostname: astroplant
      --> finish

  Using avahi-daemon makes it possible to access the pi using [astroplant.local](http://astroplant.local):

      sudo apt-get install avahi-daemon

  ##### Enable I2C
      sudo apt-get install -y python-smbus i2c-tools
      sudo raspi-config
        7 Advanced Options --> expand filesystem
        4 Interfacing Options --> P5 I2C --> <yes>
        <Finish>
      sudo reboot -n

  [Reference](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-4-gpio-setup/configuring-i2c)

  #### Boot the node server at startup
  We use the 'forever' module to keep the server running:

      npm install -g forever
      crontab -u pi -e
      @reboot /usr/bin/sudo -u pi -H /usr/local/bin/forever start -e /home/pi/astroplant/logs/error.log -l /home/pi/astroplant/logs/logs.log -a /home/pi/astroplant/server.js
      --> ctrl-x
      --> yes
      sudo reboot -n

  #### Log rotate
  Make sure the logs are properly rotated, or they will completely fill the storage on the raspberry

      sudo nano /etc/logrotate.d/astroplant-server
      /home/pi/astroplant/logs/server.log {
        #size 50k
        daily         # how often to rotate
        dateext       # adds date to filename
        missingok     # don't panic if the log file doesn't exist
        rotate 10     # max num of log files to keep
        compress      # compress rotated log file with gzip
        delaycompress
        notifempty    # ignore empty files
        #create 644 root
        copytruncate  # needed for forever to work properly
        dateformat %Y-%m-%d.
      }

  ### Connect the Arduino and Raspberry
  There are many ways of Linking them such as using USB cable and Serial Connection. Why do we choose to use I2C? One reason could be it does not use your serial, USB on the Pi. Given the fact that there are only 2 USB ports, this is definitely a big advantage. Secondly, flexibility. You can easily connect up to 128 slaves with the Pi. Also we can just link them directly without a Logic Level Converter.

  Raspberry Pi as master and Arduino as slave for I2C communication

  The Raspberry Pi is running at 3.3 Volts while the Arduino is running at 5 Volts. There are tutorials suggest using a level converter for the I2C communication. This is NOT needed if the Raspberry Pi is running as “master” and the Arduino is running as “slave”.

  The reason it works is because the Arduino does not have any pull-ups resistors installed, but the P1 header on the Raspberry Pi has 1k8 ohms resistors to the 3.3 volts power rail. Data is transmitted by pulling the lines to 0v, for a “high” logic signal. For “low” logic signal, it’s pulled up to the supply rail voltage level. Because there is no pull-up resistors in the Arduino and because 3.3 volts is within the “low” logic level range for the Arduino everything works as it should.

  https://oscarliang.com/raspberry-pi-arduino-connected-i2c/
  Note that the built-in pull-up resistors are only available on the Pi’s I2C pins (Pins 3 (SDA) and 5 (SCL), i.e. the GPIO0 and GPIO1 on a Rev. 1 board, GPIO2 and GPIOP3 on a Rev. 2 board:
  On the Arduino Uno, the I2C pins are pins A4 (SDA) and A5 (SCL), On the Arduino Mega, they are 20 (SDA), 21 (SCL)
  raspberry pi zero pinout: https://pinout.xyz/pinout/1_wire_pi_zero

  Check if I2C is enabled at the rpi0:

  ### Pumps & Lights


  ## Software
  ### Raspberry pi
  The main process is a nodejs server starting at boot.

## Backend
</div>
