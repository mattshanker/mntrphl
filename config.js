cfg.accountSid = process.env.
cfg.authToken = process.env.
cfg.sendingNumber = process.env.15005550006;

var requiredConfig = [cfg.accountSid, cfg.authToken, cfg.sendingNumber];
var isConfigured = requiredConfig.every(function(configValue) {
  return configValue || false;
});

if(!isConfigured) {
  var errorMessage = 
    'TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_NUMBER must be set.';

  throw new Error(errorMessage);
}

module.exports = cfg;
