var config = require('./config');
//var accountSid = 'AC7bcc0b364cfb5c13824ea2aae31a9baa';
//var authToken = 'c4292b9f2f266bd6dc2690f90eed9a3a';

var twilio = require('twilio')(config.accountSid, config.authToken);
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
var server = require('./server');
app.use(bodyParser.urlencoded({
  extended: true
}));


/* var options = {
  host: 'api.twilio.com',
  path: '/2010-04-01/Accounts/ /Messages.xml',
  port: 443,
  method: 'POST',
  headers: {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Content-Length': postdata.length
},
  auth: accountSid + ':' + authToken
};
*/
app.post('/twilio/Messages', function(req, res) {
  var twiml = new twilio.TwimlResponse();
  twiml.message('hello world!');

  response.type('text/xml');
  response.send(twiml.toString());
});

var mentorName = 'jimi';
var mentorNumber = '12155557890';

var message = 'Welcome home, your mentor\'s name is' + mentorName + 'and their phone number is ' + mentorNumber + '. They\'re waiting for your call right now.'

  twilio.sms.messages.create({
  to:'+18565346624',
  from: config.twilioNumber,
  body: message
  }, function (err, sms) {
  if(!err) {
  console.log('success');
  console.log(message);
}
  if (err) {
  console.log(err);
}
});

console.log('ahoy!');
