var express = require('express');
var router = express.Router();
var marked = require('marked');
var hljs = require('highlight.js');
var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
var Page = require('./model/Page.js').Page;
var ejs = require('ejs');

marked.setOptions({
	langPrefix: 'hljs ',
	highlight: function(code){
		return hljs.highlightAuto(code).value;
	}
});

// markdown to html
function markToHtml(content){
    var renderer = new marked.Renderer();
    // head renderer
    renderer.heading = function (text, level) {
        return '<h' + level + ' class="gmp-h">' + text + '</h' + level + '>';
    }

    return marked(content, { renderer: renderer });

}
// save html page
function savePage(pageName, pageTitle, htmlContent){
    var doc = fs.readFileSync(path.join(__dirname, '../views/doc.html'), 'utf8');
    var menus = getMenu(htmlContent);
    var obj = {
        title: pageTitle,
        content: htmlContent,
        menus: menus
    };
    fs.writeFileSync(path.join(__dirname, '../views/doc/' + pageName + '.html'), ejs.render(doc, obj), 'utf8');
}

function getMenu(content){
    var $ = cheerio.load(content);
    var heads = $('h2.gmp-h, h3.gmp-h');
    var menus = [];
    heads.each(function(index, item){
        if(item.name == 'h2'){
            menus.push({
                id: item.attribs['id'],
                name: item.name,
                text: item.children[0].data,
                subs: []
            });
        }else{
            var parent = menus[menus.length - 1];
            parent.subs.push({
                id: item.attribs['id'],
                name: item.name,
                text: item.children[0].data
            });
        }
    });
    return menus;
}

// page create
router.get('/page/:key?', function(req, res){
//    var data = fs.readFileSync(path.join(__dirname, '../public/page.html'), 'utf8');
//    res.send(data);
    res.render('page');
});

// page detail
router.get('/page/detail/:key', function(req, res){
    var key = req.params.key;
    var pageItem = new Page().getItem(key);
    var pageName = pageItem.pageName;
    var pageTitle = pageItem.pageTitle;
    var markContent = fs.readFileSync(path.join(__dirname, '../source/' + pageName + '.md'), 'utf8');
    var htmlContent = markToHtml(markContent);
    res.json({
        pageName: pageName,
        pageTitle: pageTitle,
        markContent: markContent,
        htmlContent: htmlContent
    });
});


// preview
router.post('/preview', function(req, res){
    var markContent = req.body.content;
    // console.log(req.body.content);

    res.json({
        content: markToHtml(markContent)
    });
});

// save page
router.post('/page/:key?', function(req, res){

    // console.log(req.params.pageName);
    // params
    var key = req.params.key;
    var htmlContent = req.body.htmlContent;
    var markContent = req.body.markContent;
    var	pageName = req.body.pageName;
    var pageTitle = req.body.pageTitle;

    var sourcePath = path.join(__dirname, '../source/');

    var page = new Page();

    // new page
    if(!key){
        // page not exist
        if(!page.exist(pageName)){
            page.add({
                "pageName": pageName,
                "pageTitle": pageTitle
            });

            // save markdown file
            fs.writeFileSync(sourcePath + pageName + '.md', markContent, 'utf8');

            // save html file
            savePage(pageName, pageTitle, htmlContent);

            res.json({
                status: 1
            });

        }else{  // page exist
            res.json({
                status: 2
            });
        }
    }else{  // edit page
        var oldPageName = page.getItem(key).pageName;

        // page name unchanged
        if(oldPageName == pageName){

            page.modify({
                "key": key,
                "pageName": pageName,
                "pageTitle": pageTitle
            });
            // save markdown file
            fs.writeFileSync(sourcePath + pageName + '.md', markContent, 'utf8');

            // save html file
            savePage(pageName, pageTitle, htmlContent);

            res.json({
                status: 1
            });
        }else{  // page name changed

            // new page name is not used
            if(!page.exist(pageName)){

                page.modify({
                    "key": key,
                    "pageName": pageName,
                    "pageTitle": pageTitle
                });

                // rename markdown file and write
                fs.rename(sourcePath + oldPageName + '.md', sourcePath + pageName + '.md', function(err){
                    if(err){
                        console.log('Rename file error: ' + err);
                    }else{
                        fs.writeFileSync(sourcePath + pageName + '.md', markContent, 'utf8');
                    }
                });

                // rename html file and write
                fs.rename(path.join(__dirname, '../views/doc/' + oldPageName + '.html'), path.join(__dirname, '../views/doc/'  + pageName + '.html'), function(err){
                    if(err){
                        console.log('Rename file error: ' + err);
                    }else{
                        savePage(pageName, pageTitle, htmlContent);
                    }
                });

                res.json({
                    status: 1
                });
            }else{ // new page name used
                res.json({
                    status: 2
                });
            }
        }
    }

});


// page delete
router.get('/delete/:key', function(req, res){
    var key = req.params.key;
    var page = new Page();
    // console.log(page);
    var item = page.getItem(key);
    var md = path.join(__dirname, '../source/' + item.pageName + '.md');
    var html = path.join(__dirname, '../views/doc/' + item.pageName + '.html');

    // delete markdown file
    if(fs.existsSync(md)){
        fs.unlinkSync(md);
    }
    // delete html file
    if(fs.existsSync(html)){
        fs.unlinkSync(html);
    }
    res.json(page.delete(key));
});

// pages rebuild
router.get('/build', function(req, res){
    var markContent, htmlContent, pageName, pageTitle, pages = new Page().get();
    pages.forEach(function(item, index, arr){
        pageName = item.pageName;
        pageTitle = item.pageTitle;
        markContent = fs.readFileSync(path.join(__dirname, '../source/' + pageName + '.md'), 'utf8');
        htmlContent = markToHtml(markContent);
        savePage(pageName, pageTitle, htmlContent);
    });
    res.send('生成成功！');
});

// index
router.get('/', function(req, res){
    // read page map
    var page = new Page();
    var pagesJSON = page.get();
    // console.log(pagesJSON);
//    res.json(pagesJSON);
    res.render('list', {
        pages: pagesJSON
    });
});

module.exports = router;