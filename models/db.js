var mysql = require("mysql");



var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password1',
  database: 'words',
  charset: "utf8_general_ci"
});

try
{
	connection.connect();
}
catch(err)
{
	console.log(err);
}