var config = require('./config.json');
var Door = require('./lib/door.js');
var CardValidator = require('./lib/cardValidator.js');

var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

var sp = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

var secureDoor = new Door({ doorGPIOPin: config.doorGPIOPin });
var cardValidator = new CardValidator({
  host: config.host,
  apiKey: config.apiKey
});

sp.on("open", function () {
  console.log('Listening to card reader.');
  sp.on('data', function(data) {
    var cardID = data.replace(/[^A-Z0-9]/g, '');
    cardValidator.validate(cardID, function() {
      secureDoor.open({ timeDelay: config.doorTimeDelay });
      console.log('VALID CARD');
    }, function() {
      console.log('INVALID CARD');
    });
  });
});
