var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');


// docs route
exports.route = function(app){
	var docs = fs.readdirSync(path.join(__dirname, '../doc'));
	docs.forEach(function(value, index, arr){
		var docName = value.split('.')[0];
		router.get('/doc/' + docName, function(req, res){
			var fileData = fs.readFileSync(path.join(__dirname, '../doc/' + docName + '.html'), 'utf8');
			res.send(fileData);
		});
	});

	app.use('/', router);
}