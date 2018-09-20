### Install from source

    $ git clone "address"
    $ cd opc-ua-energy-server
    $ npm install
    $ node energy.js


### Edit config
  In the folder config, you can find the config.js in which there are the following parameters to be set:

      $ port = 4334;                         -> Server Port
      $ read_timeout = 10000;                -> Set a regular interval to read data from csv file
      $ resourcePath = "UA/EnergyServer";    -> Server resource path
      $ columnNames = ["ResourceID","Timestamp","ActivePowerL1","Flow","Pressure"]; -> Set variable names
      $ readTimestamp = false;               -> (If  true) Set an interval, computed from Timestamp column in csv file, to read data
