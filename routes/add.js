var express = require('express');
var router = express.Router();

var db = require('./../models/db');

var mydb = new DBHandler();

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

		mydb.connection.query("insert into words (hebrew_word, english_word, created_at) values ('" + hebrew_word + "', '" + english_word + "', current_timestamp)",
			function(err)
			{
				if(err)
				{
					throw err;
					success = 'error';
				} 
			});

		return res.send(success);
	})
	//Get words
	.get(function(req, res){
		console.log("!");
		return "";
	});

module.exports = router;