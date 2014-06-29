var path = require('path');
var fs = require('fs');

// pages map object
var Page = function(){
	this.mapPath = path.join(__dirname, '../../source/pages.json');
	this.pages = fs.readFileSync(this.mapPath, 'utf8');
	this.pagesJSON = JSON.parse(this.pages);
}
Page.prototype = {
	add: function(item){
		var length = this.pagesJSON.length;
		var key = length > 0 ? this.pagesJSON[length - 1].key + 1: 1;
		item.key = key;
		this.pagesJSON.push(item);

		// write
		fs.writeFileSync(this.mapPath, JSON.stringify(this.pagesJSON), 'utf8');
	},
	get: function(){
		return this.pagesJSON;
	},
	getString: function(){
		return this.pages;
	},
	getItem: function(key){
		return this.pagesJSON.filter(function(elem, index, arr){
			return elem.key == key;
		})[0];
	},
	exist: function(key){
		var resultArray = this.pagesJSON.filter(function(elem, index, arr){
			return elem.key == key;
		});
		return resultArray.length > 0;
	},
	delete: function(key){
		var copy = this.pagesJSON;
		copy.forEach(function(elem, index, arr){
			if(elem.key == key){
				// console.log(index);
				copy.splice(index, 1);
			}
		});

		fs.writeFileSync(this.mapPath, JSON.stringify(copy), 'utf8');
		return copy;
	},
    modify: function(item){
        var key = item.key;
        this.pagesJSON.forEach(function(elem, index, arr){
            if(elem.key == key){
                elem.pageName = item.pageName;
                elem.pageTitle = item.pageTitle;
            }
        });

        fs.writeFileSync(this.mapPath, JSON.stringify(this.pagesJSON), 'utf8');

        return this.pagesJSON;

    }
}

exports.Page = Page;