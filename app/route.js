var express = require('express');
var router = express.Router();
var marked = require('marked');
var hljs = require('highlight.js');
var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var Page = require('./model/Page.js').Page;

marked.setOptions({
	langPrefix: 'hljs ',
	highlight: function(code){
		return hljs.highlightAuto(code).value;
	}
});



function route(app){

	// page create
	router.get('/page/:key?', function(req, res){
		// res.sendfile('../page.html');
		var data = fs.readFileSync(path.join(__dirname, '../public/page.html'), 'utf8');
		res.send(data);
	});

	// page detail
	router.get('/page/detail/:key', function(req, res){
		var key = req.params.key;
		console.log(key);
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
	router.post('/page/:pageName?', function(req, res){

		// console.log(req.params.pageName);
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


		var page = new Page();

		if(!page.exist(pageName)){
			page.add({
				"pageName": pageName,
				"pageTitle": pageTitle
			});
		}
		

		// save markdown file
		fs.writeFileSync(sourcePath + pageName + '.md', markContent, 'utf8');

		// save html file
		fs.writeFileSync(docPath + pageName + '.html', $.html(), 'utf8');


		// return result
		res.json({
			msg: 1
		});
	});

	// page list
	router.get('/list', function(req, res){
		// read page map
		var page = new Page();
		var pagesJSON = page.get();
		// console.log(pagesJSON);
		res.json(pagesJSON);
	});

	// index
	router.get('/', function(req, res){
		res.sendfile('../index.html');
	});

	app.use('/', router);
}

exports.route = route;