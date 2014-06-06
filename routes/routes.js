var express = require('express');
var router = express.Router();

module.exports = function route(){
	// index
	router.route('/', function(req, res){
		res.render('post.hbs');
	});
}