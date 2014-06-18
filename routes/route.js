var express = require('express');
var router = express.Router();
var marked = require('marked');
var renderer = new marked.Renderer();
var hljs = require('highlight.js');

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

	// post
	router.get('/post', function(req, res){
		res.redirect('../post.html');
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

	// save post
	router.post('/post', function(req, res){
		var markContent = req.body.htmlContent;
		console.log(markContent);
	});


	app.use('/', router);
}

exports.route = route;