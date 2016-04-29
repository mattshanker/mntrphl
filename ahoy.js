//var cfg = require('./config.js');
var accountSid = 'AC7bcc0b364cfb5c13824ea2aae31a9baa';
var authToken = 'c4292b9f2f266bd6dc2690f90eed9a3a';

var twilio = require('./node_modules/twilio/lib/index')(accountSid, authToken);
var express = require('express');

var qs = require('querystring');
var https = require('https');
var dbQuery = require('./dbq');

//var app = express();
//app.use(express.urlencoded());

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

//db query
dbQuery.getDB;
//end db query

var mentorName = 'jimi';
var mentorNumber = '12155557890';

var message = 'Welcome home, your mentor\'s name is' + mentorName + 'and their phone number is ' + mentorNumber + '. They\'re waiting for your call right now.'

  twilio.sms.messages.create({
  to:'+18565346624',
  from:'+15005550006',
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

  twilio.messages.create({
  to:'+15005550001',
  from:'+15005550006',
  body:'some message text'
  }, function (err, sms) {
  if(!err) {
  process.stdout.write(sms.sid);
}
  if (err) {
  console.log('testing err 21211');
  console.log(err);
}
});

  twilio.messages.create({
  to:'+15005550009',
  from:'+15005550006',
  body:'some message text'
  }, function (err, sms) {
  if(!err) {
  process.stdout.write(sms.sid);
}
  if (err) {
  console.log('testing err 21614');
  console.log(err);
}
});

  twilio.messages.create({
  to:'+15005550002',
  from:'+15005550006',
  body:'some message text'
  }, function (err, sms) {
  if(!err) {
  process.stdout.write(sms.sid);
}
  if (err) {
  console.log('testing err 21612');
  console.log(err);
}

//  console.log('You sent: '+ sms.body);
//  console.log('To '+ sms.to);
  });

console.log('ahoy!');
