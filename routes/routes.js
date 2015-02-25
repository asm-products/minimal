module.exports = (function() {
	'use strice';
	var router = require('express').Router();
	var bodyParser = require('body-parser');
	router.use(bodyParser.urlencoded({extended: true}));
	router.use(bodyParser.json());

	router.get('/test/', function(req, res) {
		res.send("Test from router file");
	});

	router.get('/', function(request, response) {
  response.send('Hello World!');
});

router.get('/api', function(req, res) {
    res.json('api', {routes: app._router.stack});
});


router.get("/api/bikes", function(req, res, next) {
    res.send(bikes);
});

router.get('/mybike/:bike_id', function(req, res) {
    res.json('Here is your bike ' + req.params.bike_id);
    // res.json({message: bikes});
});

router.get('/mybike/:bike/', function(req, res) {
    res.json('Here is your frame ' + req.params.frame);
});

router.get('/mybike/frame/mountain', function(req, res) {
    res.json({
        "frames" :
        [
        "urban",
        "road",
        "mountain"
        ]
    });
});

router.get('/mybike/parts', function(req, res) {
    res.json({
        "part": "part",
        "part": "part"
    });
});

router.get('/mybike/rides/', function(req, res) {
    res.json({
      "id": "22",
      "rider_id": 1,
      "frame": "urban",
      "ride_name": "wow"
    });
});

router.get('/mybike/tech/', function(req, res) {
    res.json({
     "power_level": "Power Level",
     "find_my_bike": "find_my_bike",
     "bike_tamper": "tamper",
     "bluetooth": "bluetooth"
    });
});

	return router;


})();

var bikes = { 
    mountain : [
            "Epic",
            "Camber",
            "StumpJumper",
            "RockHopper",
            "Pitch"

        ],
        road : [
            "Tarmac",
            "Allex",
            "Venge",
            "Siv"
        ],
        womens_mountain : [
            "Era",
            "Fate",
            "Jett",
            "Rumor",
            "happy",
            "run",
            "fast"
        ]
}
