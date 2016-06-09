var express = require('express');
var router = express.Router();

var db = require('./../models/db');

var mydb = new DBHandler();

mydb.connect();

router.route('/')
	.get(function(req, res){
		mydb.connection.query("select * from words", function(err,rows) {
			if(err)
			{
				throw err;
			}
			return res.send(rows);
		});
	});

module.exports = router;
