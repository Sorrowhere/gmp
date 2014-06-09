var express = require('express');
var router = express.Router();

function route(app){
	// index
	router.get('/', function(req, res){
		res.render('post.hbs', {
			title: 'Create a Post'
		});
	});

	app.use('/', router);
}

exports.route = route;