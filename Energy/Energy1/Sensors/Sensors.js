var sensors = require("./Sensors_datagenerator");

module.exports = {
  Sensors: function(server,addressSpace,Energy,data_matrix,read_timeout,columnNames,readTimestamp) {

    var Sensors = addressSpace.addObject({
        componentOf: Energy,
        browseName: "Sensors"
    });
    sensors.Sensors_datagenerator(addressSpace, Sensors,data_matrix,read_timeout,columnNames,readTimestamp);

  }
}
