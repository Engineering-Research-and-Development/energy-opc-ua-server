var exports = module.exports = {};
var express = require('express');
var config = require('./server');
var configS = require("./../config/config");
var packageJson = require("./../package");
var app = express();

exports.start = function() {
// Setup server
var server = require('http').createServer(app);
require('./routes')(app);
var port = configS.api_port;

// Start server
server.listen(port, "localhost" , function () {
  console.log('Express server listening on %s:%d', server.address().address,server.address().port);
});

process.on('uncaughtException', function(err) {
  if(err.errno === 'EACCES')
  console.log("Invalid port number, check configuration file");
  if(err.errno === 'ENOTFOUND')
  console.log("Invalid ip address, check configuration file");
  else
  console.log(err);
  process.exit(1);
});


}
// Expose app
exports.app=app;
