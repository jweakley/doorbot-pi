var gpio = require('pi-gpio');
var temporal = require('temporal');

function Door(opts) {
  this.doorPin = opts.doorGPIOPin; // TODO add checks
  this.indicatorLight = opts.indicatorLight;
  this.doorPinState = 0;
}

Door.prototype.open = function(opts) {
  var infinite = opts.infinite;
  var time = opts.timeDelay;
  if(infinite) {
    gpio.open(7, 'output', function(err) { // TODO handle errors
      gpio.write(7, 1, function(){
        gpio.close(7);
      });
    });
  } else {
    gpio.open(7, 'output', function(err) { // TODO handle errors
      gpio.write(7, 1, function() {
        temporal.delay(time, function() {
          gpio.write(7, 0, function() {
            gpio.close(7);
          });
        });
      });
    });
  }
}

Door.prototype.close = function(opts) {
  var infinite = opts.infinite;
  var time = opts.timeDelay;
  if(infinite) {
    gpio.open(this.doorPin, 'output', function(err) { // TODO handle errors
      gpio.write(this.doorPin, 0, function(){
        gpio.close(this.doorPin);
      });
    });
  } else {
    gpio.open(this.doorPin, 'output', function(err) { // TODO handle errors
      gpio.write(this.doorPin, 0, function() {
        temporal.delay(time, function() {
          gpio.write(this.doorPin, 1, function() {
            gpio.close(this.doorPin);
          });
        });
      });
    });
  }
}

module.exports = Door;
