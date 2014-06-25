var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var routes = require('./routes/route.js');
var docRoutes = require('./routes/doc-route.js');
var debug = require('debug')('my-application');

var app = express();
var port = process.env.PORT || 3000;
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');



app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'html');
// app.set('views', __dirname + '/doc');

// router
routes.route(app);
// doc router
docRoutes.route(app);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send('error',  err.message);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', err.message);
});


// module.exports = app;

app.set('port', port);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + port);
});
