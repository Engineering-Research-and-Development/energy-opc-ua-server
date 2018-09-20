var exports = module.exports = {};

var port = 4334;
var read_timeout = 1000;
var resourcePath = "UA/EnergyServer";
var columnNames = ["ResourceID","Timestamp","ActivePowerL1","Flow","Pressure"];
var readTimestamp = true;

exports.port = port;
exports.read_timeout = read_timeout;
exports.resourcePath = resourcePath;
exports.columnNames = columnNames;
exports.readTimestamp = readTimestamp;
