var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '52.34.54.111',
  user     : 'root',
  password : 'Password1',
  database: ''
});

connection.connect();

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

		connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
			if(err)
			{
				throw err;
			} 
			console.log('The solution is: ', rows[0].solution);
		});

		return res.send(req.body);
	})
	//Get words
	.get(function(req, res){
		console.log("!");
		return "";
	});

module.exports = router;