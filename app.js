var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require('./app/route.js');
var docRouter = require('./app/doc-route.js');

var app = express();
var port = process.env.PORT || 3001;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html', require('ejs').renderFile);



app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// router
app.use('/manage/', router);
app.use('/', docRouter);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stack trace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', { error: err.message});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { error: err.message});
});


// module.exports = app;

app.set('port', port);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + port);
});
