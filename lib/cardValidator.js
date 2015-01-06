var http = require('http');
var options = {
  host: 'immense-sea-8168.herokuapp.com/'
};

function CardValidator(opts) {
}

CardValidator.prototype.validate = function(card_id, success, failure) {
  options = {
    host: 'immense-sea-8168.herokuapp.com',
    path: '/api/v1/credentials/'+ card_id +'.json?form=rfid',
    headers: { 'Authorization': 'Token token=\"7de07a2c02d9f59b14d95f4ff5c5d789\"' }
  };
  var req = http.request(options, function(res){
    res.setEncoding('utf8');
    if(res.statusCode == 200) {
      success();
    } else {
      failure();
    }
  });
  req.end();
}

module.exports = CardValidator;
