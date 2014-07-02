var path = require('path');
var fs = require('fs');

// pages map object
var Page = function(){
	this.mapPath = path.join(__dirname, '../../lib/pages.json');
	this.pagesSting = fs.readFileSync(this.mapPath, 'utf8');
	this.pages = JSON.parse(this.pagesSting);
}
Page.prototype = {
	add: function(item){
		var length = this.pages.length;
		var key = length > 0 ? this.pages[length - 1].key + 1: 1;
		item.key = key;
		this.pages.push(item);

		// write
		fs.writeFileSync(this.mapPath, JSON.stringify(this.pages), 'utf8');
	},
	get: function(){
		return this.pages;
	},
	getString: function(){
		return this.pagesSting;
	},
	getItem: function(key){
		return this.pages.filter(function(elem, index, arr){
			return elem.key == key;
		})[0];
	},
	exist: function(pageName){
		var resultArray = this.pages.filter(function(elem, index, arr){
			return elem.pageName == pageName;
		});
		return resultArray.length > 0;
	},
	delete: function(key){
		var copy = this.pages;
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
        this.pages.forEach(function(elem, index, arr){
            if(elem.key == key){
                elem.pageName = item.pageName;
                elem.pageTitle = item.pageTitle;
            }
        });

        fs.writeFileSync(this.mapPath, JSON.stringify(this.pages), 'utf8');

        return this.pages;

    }
}

exports.Page = Page;