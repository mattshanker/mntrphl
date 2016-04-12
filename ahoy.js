var accountSid = 'AC977952e13253884f685e486620acd187';
var authToken = '42a012f1897aa4ccc5efd1b2f570f8ff';

var client = require('./node_modules/twilio/lib/index')(accountSid, authToken);
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'archer',
  database: 'test',
});

//db query
connection.connect(function(err) {
  if (!err){
    console.log('connected!');
  }
  if (err){
  console.log(err);
  }
});


connection.query('SELECT name, contact from mentor where a = "3" ', function(err, res, fields){
  if (!err){
  console.log(res);
  }
  if (err){
  console.log(err);
  }
});

connection.end(function(err){
  if(!err){
    console.log('bye');
  }
  if (err){
    console.log(err);
  }
});

//end db query

client.messages.create({
  to:'+18565346624',
  from:'+18564524682',
  body:result
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

