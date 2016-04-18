var accountSid = 'AC7bcc0b364cfb5c13824ea2aae31a9baa';
var authToken = 'c4292b9f2f266bd6dc2690f90eed9a3a';

var twilio = require('./node_modules/twilio/lib/index')(accountSid, authToken);

//db query

//end db query


  twilio.messages.create({
  to:'+18565346624',
  from:'+15005550006',
  body:'some message text'
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

