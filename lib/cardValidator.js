var http = require('http');

function CardValidator(opts) {
  this.host = opts.host; // TODO add checks
  this.apiKey = opts.apiKey;
}

CardValidator.prototype.validate = function(card_id, success, failure) {
  options = {
    host: this.host,
    path: '/api/v1/credentials/'+ card_id +'.json?form=rfid',
    headers: { 'Authorization': 'Token token=\"' + this.apiKey + '\"' }
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
