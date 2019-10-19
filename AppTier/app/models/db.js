"user strict";

var mysql = require("mysql");

//grant all privileges on copaDataSet.* to admin@'%' identified by 'copadb2020';
//local mysql db connection
var connection = mysql.createConnection({
  host: "firstrds.czllflyqbebr.us-east-1.rds.amazonaws.com",
  user: "Daniel",
  password: "password",
  database: "copaDataSet"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
