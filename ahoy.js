var accountSid = 'AC977952e13253884f685e486620acd187';
var authToken = '42a012f1897aa4ccc5efd1b2f570f8ff';

var client = require('./node_modules/twilio/lib/index')(accountSid, authToken);

//db query

//end db query
var http = require('http');
var resp = new twilio.TwimlResponse();

http.createServer(function (req, res) {
  resp.
client.messages.create({
  to:'+18565346624',
  from:'+18564524682',
  body:
}, function (err, sms) {
  if(!err) {
  process.stdout.write(sms.sid);
}
  if (err) {
  console.log(err);
}
  console.log('You sent: '+ sms.body);
  console.log('To '+ sms.to);
});

console.log('ahoy!');

