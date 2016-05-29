var config = require('./config');

var twilio = require('twilio')(config.accountSid, config.authToken);
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

//var dbq = require('./dbq');
var app = express();
var server = require('./server');
var mysql = require('mysql');
var mentorName = "";
var mentorNumber = "";

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'archer',
  database: 'test',
  stringifyObjects: 'true'
});

conn.connect(function(err) {
  if (!err){
    console.log('connected!');
  }
  if (err){
  console.log(err);
  }
});

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

function getName () { conn.query('SELECT name from mentor where a = "1"', function(err, res, fields){
  if (!err){
      arr = JSON.stringify(res); 
      mentorName = arr.slice(10, 22);
  }
  if (err){
  console.log(err);
  }
}
)};

function getPhone () { conn.query('SELECT contact from mentor where a = "1"', function(err, res, fields){
  if (!err){
    arr = JSON.stringify(res); 
    mentorNumber = arr.slice(13, 24);
  }
  if (err){
  console.log(err);
  }
}
)};

getName();
getPhone();

var message = 'Welcome home, your mentor\'s name is ' + mentorName + ' and their phone number is ' + mentorNumber + '. They\'re waiting for your call right now.'
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
 conn.end(function(err){
  if(!err){
    console.log('disconnected');
  }
  if (err){
    console.log(err);
  }
});
console.log(message);
