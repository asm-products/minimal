var express = require('express');
var app = express();
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bike = require('./routes/bike');
var router = express.Router();

//var dbName = 'bikeDB';
//var devUrl = 'mongodb://localhost:27017/'
//var herokuURL = 'mongodb://minimal:minimal@ds045511.mongolab.com:45511/heroku_app34150280'
//mongoose.connect(connectionString);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.set('port', (process.env.PORT || 4000));
app.use(express.static(__dirname + '/public'));

// array of menu items
// these relate directly to the menu icon file names
// TODO: feed this with http.get call
var menu_items = [
  {_id: 12345, name: "accessories"},
  {_id: 12345, name: "allparts"},
  {_id: 12345, name: "bottombrackets"},
  {_id: 12345, name: "brakelevers"},
  {_id: 12345, name: "brakerotors"},
  {_id: 12345, name: "chainrings"},
  {_id: 12345, name: "cogs"},
  {_id: 12345, name: "crankset"},
  {_id: 12345, name: "forksdouble"},
  {_id: 12345, name: "forksrigid"},
  {_id: 12345, name: "forkssingle"},
  {_id: 12345, name: "grips"},
  {_id: 12345, name: "handlebars"},
  {_id: 12345, name: "headsets"},
  {_id: 12345, name: "hubs"},
  {_id: 12345, name: "pedals"},
  {_id: 12345, name: "rearshockair"},
  {_id: 12345, name: "rearshockcoil"},
  {_id: 12345, name: "rims"},
  {_id: 12345, name: "seatposts"},
  {_id: 12345, name: "shifter"},
  {_id: 12345, name: "spokes"},
  {_id: 12345, name: "stems"},
  {_id: 12345, name: "tires"}
]

// pass in menu_items array so entire app has access
// to it
app.use(function(req, res, next) {
  res.locals.menu_items = menu_items;
  next();
});

/////////////////////////////////////////
// client page routes
app.get('/', function(request, response) {
  response.render('index', { title: 'Minimal :: Crowdsourced Bike Building' });
});

app.get('/store', function(request, response) {
  response.render('store', { title: 'Minimal :: Crowdsourced Bike Building' });
});

app.get('/store/:id', function(request, response) {
  response.render('store', { title: 'Minimal :: Crowdsourced Bike Building' });
});

app.get('/bikes', function(request, response) {
  response.render('bikes', { title: 'Minimal :: Crowdsourced Bike Building' });
});

app.get('/community', function(request, response) {
  response.render('community', { title: 'Minimal :: Crowdsourced Bike Building' });
});

app.get('/build', function(request, response) {
  response.render('build', { title: 'Minimal :: Crowdsourced Bike Building' });
});

app.get('/cart', function(request, response) {
  response.render('cart', { title: 'Minimal :: Crowdsourced Bike Building' });
});

app.get('/about', function(request, response) {
  response.render('about', { title: 'Minimal :: Crowdsourced Bike Building' });
});
/////////////////////////////////////////



/////////////////////////////////////////
// api routes
app.get("/api/bikes", function(req, res, next) {
    res.send(bikes);
});

router.get('/mybike', function(req, res) {
    res.json({message: bikes});
});

router.get('/mybike/frame/', function(req, res) {
    res.json({
        "frames" :
        [
        "urban",
        "road",
        "mountain"
        ]
    });
});


// var herokuURL = process.env.MONGOLAB_URI;
// mongoose.connect(herokuURL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', bike);

module.exports = app;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

router.get('/mybike/tech/', function(req, res) {
    res.json({
     "power_level": "Power Level",
     "find_my_bike": "find_my_bike",
     "bike_tamper": "tamper",
     "bluetooth": "bluetooth"
    });
});
app.use('/api', router);
/////////////////////////////////////////

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