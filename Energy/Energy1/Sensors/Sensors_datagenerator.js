var opcua = require("node-opcua");

module.exports = {
  Sensors_datagenerator: function(addressSpace, Sensors, data_matrix, read_timeout,columnNames,readTimestamp) {


    var col1,col2,col3,col4;
    var tempCol1 = 1;
    var tempCol2 = 1;
    var tempCol3 = 1;
    var tempCol4 = 1;
    var timestampCol = 1;


      if(readTimestamp==true)
          var time;
      else
          var time = read_timeout;


    setInterval(function(){
      if(tempCol1 == data_matrix[0].length){
        tempCol1 = 1;
      }
      if(tempCol2 == data_matrix[2].length){
        tempCol2 = 1;
      }
      if(tempCol3 == data_matrix[3].length){
        tempCol3 = 1;
      }
      if(tempCol4 == data_matrix[4].length){
        tempCol4 = 1;
      }
      if(timestampCol == data_matrix[1].length){
        timestampCol = 1;
      }

      if(readTimestamp==true)
        time = data_matrix[1][timestampCol+1] - data_matrix[1][1];
      else
        time = readTimestamp;


      col1 = data_matrix[0][tempCol1];
      col2 = data_matrix[2][tempCol2];
      col3 = data_matrix[3][tempCol3];
      col4 = data_matrix[4][tempCol4];

      tempCol1+=1;
      tempCol2 +=1;
      tempCol3 +=1;
      tempCol4 +=1;
      timestampCol +=1;

    }, time);

    /*addressSpace.addVariable({
      componentOf: Sensors,
      nodeId: "ns=1;s="+columnNames[0], // some opaque NodeId in namespace 4
      browseName: columnNames[0],
      dataType: "String",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.String, value: String(col1) });
        }
      }
    });
*/
    addressSpace.addVariable({
      componentOf: Sensors,
      nodeId: "ns=2;s="+columnNames[2], // some opaque NodeId in namespace 4
      browseName: columnNames[2],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col2 });
        }
      }
    });

    addressSpace.addVariable({
      componentOf: Sensors,
      nodeId: "ns=3;s="+columnNames[3], // some opaque NodeId in namespace 4
      browseName: columnNames[3],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col3 });
        }
      }
    });

    addressSpace.addVariable({
      componentOf: Sensors,
      nodeId: "ns=4;s="+columnNames[4], // some opaque NodeId in namespace 4
      browseName: columnNames[4],
      dataType: "Double",
      value: {
        get: function () {
          return new opcua.Variant({dataType: opcua.DataType.Double, value: col4 });
        }
      }
    });

  }
}
