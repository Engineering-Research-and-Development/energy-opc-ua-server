var opcua = require("node-opcua");
var sensor_obj = require("./Sensors/Sensors");

module.exports ={
  construct_my_address_space: function (server,data_matrix,read_timeout,columnNames,readTimestamp) {

    var addressSpace = server.engine.addressSpace;

    objectsfolder = addressSpace.rootFolder.objects;

    var EnergyObject = addressSpace.addObject({
      organizedBy: addressSpace.rootFolder.objects,
      browseName: "Energy"
    });

    sensor_obj.Sensors(server,addressSpace,EnergyObject,data_matrix,read_timeout,columnNames,readTimestamp);
    }
}
