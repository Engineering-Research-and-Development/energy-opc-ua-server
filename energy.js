var opcua = require("node-opcua");
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var energyAS = require("./Energy/Energy1/Energy_object");
var config = require("./config/config");
var serviceServer = require("./services/server");


var data_matrix = null;
var csvData=[];
var data = [];

var port = config.port;
var resourcePath = config.resourcePath;
var read_timeout = config.read_timeout;
var columnNames = config.columnNames;
var readTimestamp = config.readTimestamp;

function create_datamatrix(callback) {
  fs.createReadStream("./config/energy.csv")
  .pipe(parse({delimiter: ','}))
  .on('data', function(csvrow) {
    csvData.push(csvrow);
  })
  .on('end',function() {
    for (i=0; i<=csvData[0].length-1; i++){
      var p = [];
      for (j=0; j<=csvData.length-1; j++){
        p.push(csvData[j][i]);
      }
      data.push(p);
    }
    data_matrix = data;
    return callback();
  });
}

// Let's create an instance of OPCUAServer
var server = new opcua.OPCUAServer({
    port: port, // the port of the listening socket of the server
    resourcePath: resourcePath, // this path will be added to the endpoint resource name
     buildInfo : {
        productName: "EnergyServer",
        buildNumber: "1",
        buildDate: new Date(2018,09,20)
    }
});

function post_initialize() {

  console.log("initialized");

  async.series([
      function(callback) {
        create_datamatrix(callback);
      },
      function(callback) {
          energyAS.construct_my_address_space(server,data_matrix,read_timeout,columnNames,readTimestamp);
          server.start(function() {
            console.log("Server is now listening ... ( press CTRL+C to stop)");
            console.log("port ", server.endpoints[0].port);
            var endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
            console.log(" the primary server endpoint url is ", endpointUrl );
   });
   serviceServer.start();
 }

]);




}
server.initialize(post_initialize);
