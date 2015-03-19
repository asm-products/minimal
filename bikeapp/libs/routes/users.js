var express = require('express');
var passport = require('passport');
var router = express.Router();

var libs = process.cwd() + '/libs/';

var db = require(libs + 'db/mongoose');

router.get('/info', passport.authenticate('bearer', { session: false }),
    function(req, res) {
        res.json({
        	user_id: req.user.userId,
        	name: req.user.username,
        	scope: req.authInfo.scope
        });
    }
);

module.exports = router;
