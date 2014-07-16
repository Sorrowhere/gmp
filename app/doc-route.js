var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var Page = require('./model/Page.js').Page;


// docs route
var docs = fs.readdirSync(path.join(__dirname, '../views/doc'));
docs.forEach(function(value, index, arr){
    var docName = value.split('.')[0];
    router.get('/' + docName, function(req, res){
        res.render('doc/' + docName);
    });
});

router.get('/nav', function(req, res){
    var page = new Page();
    res.json(page.get());
});

// index
router.get('/', function(req, res){
    // read page map
    res.render('doc/index');
});


module.exports = router;