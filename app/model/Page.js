var path = require('path');
var fs = require('fs');

// pages map object
var Page = function(){
	this.pages = fs.readFileSync(path.join(__dirname, '../../source/pages.json'), 'utf8');
	this.pagesJSON = JSON.parse(this.pages);
}
Page.prototype = {
	add: function(item){
		var length = this.pagesJSON.length;
		var key = length > 0 ? this.pagesJSON[length - 1].key + 1: 1;
		item.key = key;
		this.pagesJSON.push(item);

		// write
		fs.writeFileSync(path.join(__dirname, '../../source/pages.json'), JSON.stringify(this.pagesJSON), 'utf8');
	},
	get: function(){
		return this.pagesJSON;
	},
	getString: function(){
		return this.pages;
	},
	exist: function(key){
		var resultArray = this.pagesJSON.filter(function(elem, index, arr){
			return elem.key == key;
		});
		return resultArray.length > 0;
	},
	remove: function(key){
		var result = this.pagesJSON.filter(function(elem, index, arr){
			return elem.key == key;
		});
		// return this.pagesJSON.indexOf(result);
		return result;
	}
}

exports.Page = Page;