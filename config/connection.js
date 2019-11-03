// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "	y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "	b1uir8qalvrff09y",
  password: "hp69q4ma4aef01v6",
  database: "	qv6ic4dmhq8mfj00"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
