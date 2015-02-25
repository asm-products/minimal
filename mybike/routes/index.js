var express = require('express');
var router = express.Router();

//GET - MyBike - /mybike
router.get('/mybike', function(req, res) {
    res.json({
        "data":
            {
                "id": "My Bike\'s ID",
                "type": "My Bike Type",
                "name": "My Bike\'s Name"
            }
    });
});

//GET - Frame - /mybike/frame
router.get('/mybike/frame', function(req, res) {
    res.json({
        "data":
            {
                "id": "Frame ID",
                "type": "Frame Type"
            }
    });
});

//GET - Parts - /mybike/parts
router.get('/mybike/parts', function(req, res){
    res.json({
        "data":
            [{
                "stem":
                    {
                       "id": "st001",
                       "type": "Stem Type"
                    },
               "frame":
                    {
                       "id": "fr001",
                       "type": "Frame Type"
                    }
            }]
    });
});

//GET - Rides - /mybike/rides
router.get('/mybike/rides', function(req, res) {
    res.json({
       "data":
           [{
                "ride01":
                    {
                        "id": "ri001",
                        "type": "My Ride Type I",
                        "distance": "5",
                        "unit": "miles"
                    },
                "ride02":
                    {
                        "id": "ri002",
                        "type": "My Ride Type II",
                        "distance": "14",
                        "unit": "miles"
                    }
            }]
    });
});

//GET - Ride - /mybike/rides/:id
router.get('/mybike/rides/:id/', function(req, res) {
    res.json({
        "data":
            {
                "id": req.params.id,
                "type": "My Ride Type",
                "riderId": "riderId",
                "bike": "bikeId", //Can use this to further query about frame,parts etc.,
                "name": "My Ride Name",
                "description": "My Ride Description",
                "distance": "Ride Distance",
                "distanceUnit": "miles",
                "movingTime": "Moving Time",
                "elapsedTime": "Elapsed Time",
                "totalElevationGain": "TotalElevationGain",
                "startTime": new Date(),
                "endTime": new Date(),
                "timeZone": "Time Zone",
                "startLocation": {
                                    "lat": "Some Latitude",
                                    "lng": "Some Longitude"
                                 },
                "endLocation": {
                                    "lat": "Some Latitude",
                                    "lng": "Some Longitude"
                                },
                "city": "City",
                "state": "State",
                "country": "Country",
                "map": "map",
                "averageSpeed": "Ride's Average Speed",
                "maxSpeed": "Ride's Max Speed",
                "speedUnit": "kmph",
                "averageCadence": "Average Cadence",
                "averageTemp": "Average Temp",
                "averageHeartRate": "Average Heart Rate",
                "maxHeartRate": "Max HeartRate",
                "calories": "Calories"
            }
    });
});

//GET - Tech
router.get('/mybike/tech', function(req, res) {
    res.json({
       "data":
           [{
            "powerLevel": "powerLevel",
            "bluetooth": {
                "version": "4",
                "hardware": {
                    "vendor": "broadcom"
                }
            }
        }]
    });
});

module.exports = router;
