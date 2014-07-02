var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var Page = require('./model/Page.js').Page;


// docs route
var docs = fs.readdirSync(path.join(__dirname, '../doc'));
docs.forEach(function(value, index, arr){
    var docName = value.split('.')[0];
    router.get('/' + docName, function(req, res){
        var fileData = fs.readFileSync(path.join(__dirname, '../doc/' + docName + '.html'), 'utf8');
        res.send(fileData);
    });
});

router.get('/menus', function(req, res){
    var page = new Page();
    res.json(page.get());
});


module.exports = router;