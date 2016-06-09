var mysql = require("mysql");
var bluebird = require("bluebird");

DBHandler = function(){
	this.connection = mysql.createConnection({
		host		: 'localhost',
		user		: 'root',
		password 	: 'Password1',
		database	: 'words',
		charset		: "utf8_general_ci"
	});
	this.table = "words";
}
DBHandler.prototype.connect = function() {
	try
	{
		this.connection.connect();
		return true;
	}
	catch(err)
	{
		console.log(err);
		return false;
	}	
};