# Project Doorbot
Project Doorbot is an open source access control system.

It is current made up of two parts:

- [Doorbot Pi](https://github.com/jweakley/doorbot-pi)
- [Doorbot Server](https://github.com/jweakley/doorbot-server)

## Doorbot Pi

Doorbot Pi runs on a Raspberry Pi and communicates to Doorbot Server to determine access. Using the GPIO pins on the Raspberry Pi, you can then control an external door lock via a relay.

## Requirements:
- [Raspberry Pi Model B or Model B+](http://www.raspberrypi.org/)
- [Raspbian (Debian Wheezy)](http://www.raspberrypi.org/downloads/) installed on the SD card. [Installation guide](http://www.raspberrypi.org/documentation/installation/installing-images/README.md)
- RFID Reader. I used [this one](https://www.sparkfun.com/products/11839).
- Door lock capable of being controlled by a switch.

## Getting Started
- Setup the pi. (More detailed instructions to come)
- [Clone](https://help.github.com/articles/fetching-a-remote/#clone) this repo: git@github.com:jweakley/doorbot-pi.git
- Obtain an api_key from the [Doorbot Server](https://github.com/jweakley/doorbot-server) by creating a new doorbot.

