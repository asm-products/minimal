var express = require('express');
var passport = require('passport');
var router = express.Router();

router.all('/mybike/*', passport.authenticate('bearer', { session: false }));

//GET - MyBike - /mybike
router.get('/mybike', passport.authenticate('bearer', { session: false }), function(req, res) {
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

//GET - Frame Info - /mybike/frame/:frameType
router.get('/mybike/frame/:frameType', function(req, res) {
    res.json({
        "data":
            [{

                "id": "Frame\'s ID",
                "year": "Year",
                "model": "Frame Model", //standard or pro
                "color": "Frame Color",
                "size": "Frame Size", //S, M, L, XL, or custom
                "geometry":
                    [{
                        "seatTubeLength": "STL",
                        "horizontalTopTubeLength": "TTL - Horizontal",
                        "actualTopTubeLength": "TTL - Actual",
                        "chainStayLength": "Chain Stay Length",
                        "bottomBracketHeight": "Bottom Bracket Height",
                        "actualSeatTubeAngle": "Seat Tube Angle - Actual",
                        "effectiveSeatTubeAngle": "Seat Tube Angle - Effective",
                        "headTubeAngle": "Head Tube Angle",
                        "headTubeHeight": "Head Tube Height",
                        "wheelBase": "Wheel Base",
                        "standoverHeight": "STO Height",
                        "handlebarWidth": "Handlebar Width",
                        "stemLength": "Stem Length",
                        "crankLength": "Crank Length",
                        "seatpostLength": "Seatpost Length",
                        "stack": "Stack",
                        "reach": "Reach"
                    }],
                "history":  //Use Ride ID to get ride data - /mybike/rides/:id
                    [{
                        "rides":
                            [
                                {
                                    "id": "ri001"
                                },
                                {
                                    "id": "ri002"
                                },
                                {
                                    "id": "ri003"
                                }
                            ]
                    }],
                "photos":
                    [{
                        "data":
                            [
                                {
                                    "id": "Photo001",
                                    "type": "photo",
                                    "src": "http://placehold.it/200&text=Frame001",
                                    "title": "Frame 01"
                                },
                                {
                                    "id": "Photo002",
                                    "type": "photo",
                                    "src": "http://placehold.it/200&text=Frame002",
                                    "title": "Frame 02"
                                },
                                {
                                    "id": "Photo003",
                                    "type": "photo",
                                    "src": "http://placehold.it/200&text=Frame003",
                                    "title": "Frame 03"
                                }
                            ]
                    }],
                "videos":
                    [{
                        "data":
                            [
                                {
                                    "id": "Video001",
                                    "type": "video",
                                    "src": "http//placehold.it/400&text=Video Placeholder",
                                    "title": "Frame 01 Video"
                                },
                                {
                                    "id": "Video002",
                                    "type": "video",
                                    "src": "http://placehold.it/400&text=Video Placeholder",
                                    "title": "Frame 02 Video"
                                },
                                {
                                    "id": "Video003",
                                    "type": "video",
                                    "src": "http://placehold.it/400&text=Video Placeholder",
                                    "title": "Frame 03 Video"
                                }
                            ]
                    }]
            }]
    });
});

//GET - Parts - /mybike/parts
router.get('/mybike/parts', function(req, res){
    res.json({
        "data":
            [{
                "fork":
                    {
                        "id": "fork001",
                        "type": "fork"
                    },
                "headset":
                    {
                        "id": "hs001",
                        "type": "headset"
                    },
                "stem":
                    {
                       "id": "st001",
                       "type": "stem"
                    },
                "handlebars":
                    {
                        "id": "hb001",
                        "type": "handlebar"
                    },
                "brakeRotors":
                    {
                        "id": "br001",
                        "type": "brakerotor"
                    },
                "brakeLevers":
                    {
                        "id": "bl001",
                        "type": "brakelever"
                    },
               "frame":
                    {
                       "id": "fr001",
                       "type": "frame"
                    },
                "rearDerailleur":
                    {
                        "id": "rd001",
                        "type": "rearderailleur"
                    },
                "shiftLevers":
                    {
                        "id": "sl001",
                        "type": "shiftlever"
                    },
                "cassette":
                    {
                        "id": "cs001",
                        "type": "cassette"
                    },
                "chain":
                    {
                        "id": "chain001",
                        "type": "chain"
                    },
                "belt":
                    {
                        "id": "belt001",
                        "type": "belt"
                    },
                "crankset":
                    {
                        "id": "cst001",
                        "type": "crankset"
                    },
                "pedals":
                    {
                        "id": "pd001",
                        "type": "pedal"
                    },
                "hubs":
                    {
                        "id": "hub001",
                        "type": "hub"
                    },
                "rims":
                    {
                        "id": "rim001",
                        "type": "rim"
                    },
                "spokes":
                    {
                        "id": "sp001",
                        "type": "spoke"
                    },
                "saddle":
                    {
                        "id": "sd001",
                        "type": "saddle"
                    },
                "seatpost":
                    {
                        "id": "seatpost001",
                        "type": "seatpost"
                    },
                "seatBinder":
                    {
                        "id": "sb001",
                        "type": "seatbinder"
                    }
            }]
    });
});

//GET - Rides - /mybike/rides
router.get('/mybike/rides', function(req, res) {
    res.json({
       "data":
           [
                {
                    "id": "ride001",
                    "type": "ride",
                    "distance": "4",
                    "unit": "miles"
                },
                {
                    "id": "ride002",
                    "type": "ride",
                    "distance": "14",
                    "unit": "miles"
                }
            ]
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
                "private": "false",
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
           [
           {

                "powerLevel": "powerLevel",
                "bluetooth":
                    {
                        "version": "4",
                        "hardware":
                            {
                                "vendor": "broadcom"
                            }
                    },
                "bikeTamperAlert":
                    {
                        "alert": "false",
                        "bikeId": "bike001",
                        "lastRideId": "ride001",
                        "email": "alert@minimal.com"
                    },
                "accelorometer":
                    {
                        "hardware":
                            {
                                "serialNumber": "ac0001",
                                "vendor": "vendor",
                                "year": "2006"
                            }
                    },
                "gyroscope":
                    {
                        "hardware":
                            {
                                "serialNumber": "gy001",
                                "vendor": "vendor",
                                "year": "2014"
                            }
                    }
        }]
    });
});

module.exports = router;
