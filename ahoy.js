var config = require('./config');

var twilio = require('twilio')(config.accountSid, config.authToken);
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var db = require('./dbq');
var app = express();
var server = require('./server');
var mysql = require('mysql');

app.use(bodyParser.urlencoded({
  extended: true
}));

/*
app.get('/message', function(req, res) {
  var twiml = new twilio.TwimlResponse();
  twiml.message('hello world!');

  res.type('text/xml');
  res.send(twiml.toString());
});
*/

var phone = [];
var name = [];

function getFromDB () { conn.query('SELECT name, contact from mentor where a = "1"', function(err, res, fields){
  if (!err){
    console.log(res);
    var phone = res[0].contact;
    var name = res[0].name;
    console.log(Array.isArray(phone));
    console.log(name);
  

  function () {
var message = 'mentor\'s name is ' + name + 'phone number ' + phone; 

  twilio.messages.create({
  to:'+18565346624',
  from: config.twilioNumber,
  body: message
  }, function (err, sms) {
  if(!err) {
  console.log('success!');
  console.log('SMS sent to: ' + sms.to);
  console.log('message: ' + sms.body);
  }
}
  if (err) {
  console.log(err);
}

});

},
  if (err){
  console.log(err);
  }
},



)};

/*
function sendMessage() {
var message = 'Welcome home, your mentor\'s name is ' + name + ' and their phone number is ' + phone + '. They\'re waiting for your call right now.'


  twilio.messages.create({
  to:'+18565346624',
  from: config.twilioNumber,
  body: message
  }, function (err, sms) {
  if(!err) {
  console.log('success!');
  console.log('SMS sent to: ' + sms.to);
  console.log('message: ' + sms.body);

}
  if (err) {
  console.log(err);
}
});
}
*/

//sendMessage();

