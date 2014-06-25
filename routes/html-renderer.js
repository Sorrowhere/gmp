var express = require('express');
var fs = require('fs');

exports.render = function(filepath, res){
	fs.readFile(filepath, 'utf8', function(err, text){
		res.send(text);
		// console.log(err);
	});
}