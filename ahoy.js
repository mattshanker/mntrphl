var config = require('./config');

var twilio = require('twilio')(config.accountSid, config.authToken);
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var db = require('./dbq');
var app = express();
var server = require('./server');
var mysql = require('mysql');
var mentorName = "";
var mentorNumber = "";

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

var name = db.getName();
var phone = db.getPhone();

function sendMessage() {
var message = 'Welcome home, your mentor\'s name is ' + name + ' and their phone number is ' + phone + '. They\'re waiting for your call right now.'

//  getName();
//  getPhone();

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

sendMessage();

