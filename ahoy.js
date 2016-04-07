var client = require(['../node_modules/twilio/lib/index'])(accountSid, authToken);

var accountSid = 'AC7bcc0b364cfb5c13824ea2aae31a9baa';
var authToken = '[c4292b9f2f266bd6dc2690f90eed9a3a]';


client.sms.messages.post({
  to:'+18565346624',
  from:'+15005550006',
  body:'ahoy from ahoy via twilio'
}, function (err, sms) {
  if(!err) {
  process.stdout.write(sms.sid);
  console.log('You sent: '+ sms.body);
  console.log('To '+ sms.to);
}
  if (err) {
  console.log(err);
}
});

console.log('ahoy!');

