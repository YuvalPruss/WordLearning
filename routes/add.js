var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password1',
  database: 'words'
});

try
{
	connection.connect();
}
catch(err)
{
	console.log(err);
}

//Function to allow requests
preCheck = function(req, res, next){
	//Write Into future log

	next();
};

router.use('/', preCheck);

router.route('/')
	//Insert a word
	.post(function(req, res){
		var english_word = req.body.english_word;
		var hebrew_word = req.body.hebrew_word;
		var time = req.body.time;
		
		var success = req.body;

		connection.query('insert into words (hebrew_word, english_word, created_at) values (' + english_word + ', ' + hebrew_word + ', current_timestamp)',
			function(err)
			{
				if(err)
				{
					throw err;
					success = 'error';
				} 
			});

		return res.send(error);
	})
	//Get words
	.get(function(req, res){
		console.log("!");
		return "";
	});

module.exports = router;