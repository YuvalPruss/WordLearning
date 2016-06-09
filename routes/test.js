var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
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

router.route('/')
	.post(function(req, res){
		var hebrew_word = req.body.hebrew_word;
		var id = req.body.id;

		connection.query("select hebrew_word from words where id = " + String(id), function(err, rows){
			if(err)
			{
				throw err;
			}
			if(rows[0].hebrew_word == hebrew_word)
			{
				return res.send(true);
			}
			else
			{
				return res.send(false);
			}
		});
	});

module.exports = router;