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

// pages map object
var Pages = function(){
	this.pages = fs.readFileSync(path.join(__dirname, '../source/pages.json'), 'utf8');
	this.pagesJSON = JSON.parse(this.pages);
}
Pages.prototype = {
	add: function(item){
		this.pagesJSON.push(item);
	},
	get: function(){
		return this.pagesJSON;
	},
	getString: function(){
		return this.pages;
	},
	exist: function(pageName){
		var resultArray = this.pagesJSON.filter(function(elem, index, arr){
			return elem.pageName == pageName;
		});
		return resultArray.length > 0;
	},
	remove: function(pageName){
		var result = this.pagesJSON.findIndex(function(elem, index, arr){
			return elem.pageName == pageName;
		});
		// return this.pagesJSON.indexOf(result);
		return result;
	}
}

function route(app){

	// page create
	router.get('/page/:pageName?', function(req, res){
		// res.sendfile('../page.html');
		var data = fs.readFileSync(path.join(__dirname, '../public/page.html'), 'utf8');
		res.send(data);
	});

	// page detail
	router.get('/page/detail/:pageName', function(req, res){
		var pageName = req.params.pageName;
		console.log(pageName);
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

		// // write page meta to pages.json
		// var pages = fs.readFileSync(sourcePath + 'pages.json', 'utf8');
		// var pagesJSON = JSON.parse(pages);
		// pagesJSON.push({
		// 	"pageName": pageName,
		// 	"pageTitle": pageTitle
		// });

		var pages = new Pages();

		// console.log(pages.exist(pageName));
		// console.log(pages.remove('test'));

		pages.add({
			"pageName": pageName,
			"pageTitle": pageTitle
		});

		
		fs.writeFileSync(sourcePath + 'pages.json', JSON.stringify(pages.pagesJSON), 'utf8');


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
		var pages = fs.readFileSync(path.join(__dirname, '../source/pages.json'), 'utf8');
		var pagesJSON = JSON.parse(pages);
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