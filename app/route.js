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

// markdown to html
function markToHtml(content){
    var renderer = new marked.Renderer();
    // head renderer
    renderer.heading = function (text, level) {
        var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        return '<h' + level + ' class="gmp-h">' + escapedText + '</h' + level + '>';
    }
    // paragraph
    renderer.paragraph = function(text) {
        return '<p class="gmp-p">' + text + '</p>';
    }
    return marked(content, { renderer: renderer });

}
// save html page
function savePage(pageName, pageTitle, htmlContent){
    var	tempHeader = fs.readFileSync(path.join(__dirname, '../public/layout/header.html'), 'utf8');
    var	tempFooter = fs.readFileSync(path.join(__dirname, '../public/layout/footer.html'), 'utf8');
    var tempPage = tempHeader + htmlContent + tempFooter;
    var $ = cheerio.load(tempPage);
    var title = $('title');
    $('title').text(pageTitle);

    fs.writeFileSync(path.join(__dirname, '../doc/' + pageName + '.html'), $.html({ decodeEntities: false}), 'utf8');
}

// page create
router.get('/page/:key?', function(req, res){
    var data = fs.readFileSync(path.join(__dirname, '../public/page.html'), 'utf8');
    res.send(data);
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
                fs.rename(path.join(__dirname, '../doc/' + oldPageName + '.html'), path.join(__dirname, '../doc/'  + pageName + '.html'), function(err){
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

// page list
router.get('/list', function(req, res){
    // read page map
    var page = new Page();
    var pagesJSON = page.get();
    // console.log(pagesJSON);
    res.json(pagesJSON);
});

// page delete
router.delete('/delete/:key', function(req, res){
    var key = req.params.key;
    var page = new Page();
    // console.log(page);
    var item = page.getItem(key);
    var md = path.join(__dirname, '../source/' + item.pageName + '.md');
    var html = path.join(__dirname, '../doc/' + item.pageName + '.html');

    // delete markdown file
    if(fs.existsSync(md)){
        fs.unlink(md, function(err){
            if(err){
                console.log(err);
            }else{
                console.log('delete success');
            }
        });
    }
    // delete html file
    if(fs.existsSync(html)){
        fs.unlink(html, function(err){
            if(err){
                console.log(err);
            }else{
                console.log('delete success');
            }
        });
    }
    res.json(page.delete(key));
});

// pages rebuild
router.get('/api/build', function(req, res){
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

// code to html
router.post('/api/codetohtml', function(req, res){
    var codeData = req.body.codeData;

    res.json({
        htmlData: markToHtml(codeData)
    });
});

// index
router.get('/', function(req, res){
    res.sendfile('../index.html');
});

module.exports = router;