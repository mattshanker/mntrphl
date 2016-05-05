module.exports = {

  accountSid:  process.env.TWILIO_ACCOUNT_SID || 'AC7bcc0b364cfb5c13824ea2aae31a9baa',

  authToken: process.env.TWILIO_AUTH_TOKEN || 'c4292b9f2f266bd6dc2690f90eed9a3a',

  twilioNumber: process.env.TWILIO_NUMBER || '+15005550006', 

  host: process.env.HOST || 'localhost',

  port: process.env.PORT || 3000

};
