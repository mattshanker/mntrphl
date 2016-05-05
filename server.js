var http = require('http');
var express = require('express');
var config = require('./config');

var app = express();
var server = http.createServer(app);
server.listen(config.port, function() {
  console.log('Express server running on port ' + config.port);
});

module.exports = server;
