var express = require('express');
var router = express.Router();
var marked = require('marked');
var renderer = new marked.Renderer();
var hljs = require('highlight.js');
var fs = require('fs');
var path = require('path');

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


		res.json({
			content: marked(markContent, { renderer: renderer })
		});
	});

	// save page
	router.post('/page', function(req, res){
		var htmlContent = req.body.htmlContent;
		var	pageName = req.body.pageName;
		var	folderPath = path.join(__dirname, '../doc/');
		var	tempHeader = fs.readFileSync(folderPath + 'layout/header.html', 'utf8');
		var	tempFooter = fs.readFileSync(folderPath + 'layout/footer.html', 'utf8');
		var tempFile = tempHeader + htmlContent + tempFooter;

		var tempFilePath = folderPath + pageName + '.html';

		// if a file is existed
		// var fileExisted = fs.existsSync(path);

		fs.writeFileSync(path.join(folderPath + pageName + '.html'), tempFile, 'utf8');

		// console.log(marked);
	});


	app.use('/', router);
}

exports.route = route;