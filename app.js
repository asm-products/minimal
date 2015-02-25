var express = require('express');
var app = express();
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bike = require('./routes/bike');

//var dbName = 'bikeDB';
//var devUrl = 'mongodb://localhost:27017/'
//var herokuURL = 'mongodb://minimal:minimal@ds045511.mongolab.com:45511/heroku_app34150280'
//mongoose.connect(connectionString);

var herokuURL = process.env.MONGOLAB_URI;
mongoose.connect(herokuURL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', bike);

module.exports = app;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));



// app.use('/', routes);
// app.use('/api', router);



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});



/*var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
*/