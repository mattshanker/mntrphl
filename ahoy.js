var config = require('./config');

var twilio = require('twilio')(config.accountSid, config.authToken);
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var dbq = require('./dbq');
var app = express();
var server = require('./server');
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

var mentorName = dbq.name;
var mentorNumber = phone;

var message = 'Welcome home, your mentor\'s name is ' + mentorName + ' and their phone number is ' + mentorNumber + '. They\'re waiting for your call right now.'
console.log(mentorName);
console.log(mentorNumber);
/*
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
*/
console.log('ahoy!');
