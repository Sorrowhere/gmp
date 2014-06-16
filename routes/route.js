var express = require('express');
var router = express.Router();
var marked = require('marked');

marked.setOptions({
	hightlight: function(code){
		return require('highlight.js').highlightAuto(code).value;
	}
});

function route(app){
	// index
	router.get('/', function(req, res){
		res.sendfile('../index.html');
	});

	// preview
	router.post('/preview', function(req, res){
		//
		var markContent = req.body.content;
		// console.log(req.body.content);
		res.json({
			content: marked.parse(markContent)
		});
	});

	// post page
	router.get('/post', function(req, res){
		// init editor
		res.sendfile('../post.html');
 
	});

	app.use('/', router);
}

exports.route = route;