var Bike = require('../models/bike');
var express = require('express');
var router = express.Router();

router.route('/bikes').get(function(req, res) {
	Bike.find(function(err, bikes) {
		if (err) {
			return res.send(err);
		}
		res.json(bikes);
	});
});

router.route('/bikes').post(function(req, res) {
	var bike = new Bike(req.body);

	bike.save(function(err) {
		if (err) {
			return res.send(err)
		}
		res.send({message: 'Bike Added'});
	});
})

router.route('/bike/:id').put(function(req,res){
  Bike.findOne({ _id: req.params.id }, function(err, bike) {
    if (err) {
      return res.send(err);
    }
 
    for (prop in req.body) {
      bike[prop] = req.body[prop];
    }
 
    // save the movie
    bike.save(function(err) {
      if (err) {
        return res.send(err);
      }
 
      res.json({ message: 'Bike updated!' });
    });
  });
});

router.route('/bike/:id').get(function(req, res) {
  Bike.findOne({ _id: req.params.id}, function(err, bike) {
    if (err) {
      return res.send(err);
    }
 
    res.json(bike);
  });
});

router.route('/bike/:id').delete(function(req, res) {
  Bike.remove({
    _id: req.params.id
  }, function(err, bike) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;