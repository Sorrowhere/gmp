var express = require('express');
var router = express.Router();
var marked = require('marked');
var hljs = require('highlight.js');
var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');

marked.setOptions({
	langPrefix: 'hljs ',
	highlight: function(code){
		return hljs.highlightAuto(code).value;
	}
});

function route(app){
	// index
	router.get('/', function(req, res){
		// res.sendfile('../index.html');
		fs.readFile('../index.html', 'utf8', function(err, text){
			res.send(text);
		});
	});

	// page
	router.get('/page', function(req, res){
		res.sendfile('../page.html');
	});

	// preview
	router.post('/preview', function(req, res){
		var renderer = new marked.Renderer();
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
		// params
		var htmlContent = req.body.htmlContent;
		var markContent = req.body.markContent;
		var	pageName = req.body.pageName;
		var pageTitle = req.body.pageTitle;

		// read page layout
		var	layoutPath = path.join(__dirname, '../public/layout/');
		var docPath = path.join(__dirname, '../doc/');
		var sourcePath = path.join(__dirname, '../source/');
		var	tempHeader = fs.readFileSync(layoutPath + 'header.html', 'utf8');
		var	tempFooter = fs.readFileSync(layoutPath + 'footer.html', 'utf8');

		// page content
		var tempFile = tempHeader + htmlContent + tempFooter;


		// set page title
		var $ = cheerio.load(tempFile);
		$('title').text(pageTitle);

		// write page meta to pages.json
		var pages = fs.readFileSync(sourcePath + 'pages.json', 'utf8');
		var pagesJSON = JSON.parse(pages);
		pagesJSON.push({
			"pageName": pageName,
			"pageTitle": pageTitle
		});
		// console.log(pagesJSON);
		fs.writeFileSync(sourcePath + 'pages.json', JSON.stringify(pagesJSON), 'utf8');


		// save markdown file
		fs.writeFileSync(sourcePath + pageName + '.md', markContent, 'utf8');

		// save html file
		fs.writeFileSync(docPath + pageName + '.html', $.html(), 'utf8');


		// return result
		res.json({
			msg: 1
		});
	});

	// docs route
	var docs = fs.readdirSync(path.join(__dirname, '../doc'));
	docs.forEach(function(value, index, arr){
		var docName = value.split('.')[0];
		router.get('/doc/' + docName, function(req, res){
			fs.readFile(path.join(__dirname, '../doc/' + docName + '.html'), 'utf8', function(err, text){
				res.send(text);
			});
		});
	});

	// router.get('/doc/test', function(req, res){
	// 	// console.log(path.join(__dirname, '../doc'));
	// 	// res.redirect('../test.html');
	// 	// res.redirect(path.join(__dirname, '../doc/button.html'));
	// 	// res.render('test.html');
	// 	fs.readFile(path.join(__dirname, '../doc/test.html'), 'utf8', function(err, text){
	// 		res.send(text);
	// 	});

	// });

	app.use('/', router);
}

exports.route = route;