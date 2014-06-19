var express = require('express');
var router = express.Router();
var marked = require('marked');
var renderer = new marked.Renderer();
var hljs = require('highlight.js');
var fs = require('fs');

marked.setOptions({
	langPrefix: 'hljs ',
	highlight: function(code){
		return hljs.highlightAuto(code).value;
	}
});

function route(app){
	// index
	router.get('/', function(req, res){
		res.sendfile('../index.html');
	});

	// page
	router.get('/page', function(req, res){
		res.redirect('../page.html');
	});

	// preview
	router.post('/preview', function(req, res){
		var markContent = req.body.content;
		// console.log(req.body.content);

		// heae renderer
		renderer.heading = function (text, level) {
  			var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
			return '<h' + level + '><a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">' + text + '</a></h' + level + '>';
		}
		// code renderer
		// renderer.code = function(text){
		// 	return '<pre><code class="hljs">' + text + '</code></pre>';
		// }

		// console.log(renderer);

		res.json({
			content: marked(markContent, { renderer: renderer })
		});
	});

	// save page
	router.post('/page', function(req, res){
		var markContent = req.body.htmlContent;
		console.log(markContent);
	});


	app.use('/', router);
}

exports.route = route;