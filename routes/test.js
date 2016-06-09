var express = require('express');
var router = express.Router();

var db = require('./../models/db');

var mydb = new DBHandler();

router.route('/')
	.post(function(req, res){
		var hebrew_word = req.body.hebrew_word;
		var id = req.body.id;

		mydb.connection.query("select hebrew_word from words where id = " + String(id), function(err, rows){
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