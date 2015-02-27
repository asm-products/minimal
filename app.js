var express = require('express');
var app = express();
var routes = require('./routes/routes.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bike = require('./routes/bike');
var router = express.Router();

mongoose.connect(process.env.MONGOLAB_URI);
app.set('port', (process.env.PORT || 5000));

app.use('/api', bike);
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'jade');

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

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

module.exports = app;