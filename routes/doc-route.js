var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var htmlRenderer = require('./html-renderer.js');


// docs route
exports.route = function(app){
	var docs = fs.readdirSync(path.join(__dirname, '../doc'));
	docs.forEach(function(value, index, arr){
		var docName = value.split('.')[0];
		router.get('/doc/' + docName, function(req, res){
			htmlRenderer.render(path.join(__dirname, '../doc/' + docName + '.html'), res);
		});
	});

	app.use('/', router);
}