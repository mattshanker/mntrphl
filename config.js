module.exports = {

  accountSid:  process.env.TWILIO_ACCOUNT_SID || 'AC977952e13253884f685e486620acd187',

  authToken: process.env.TWILIO_AUTH_TOKEN || '42a012f1897aa4ccc5efd1b2f570f8ff',

  twilioNumber: process.env.TWILIO_NUMBER || '+18564524682', 

  host: process.env.HOST || 'localhost',

  port: process.env.PORT || 3000

};
