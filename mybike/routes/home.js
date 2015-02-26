var express = require('express');
var router = express.Router();


//Get HomePage - Expose Endpoints Here
router.get('/', function(req, res) {
//    console.log(app._router.stack);
    res.send('');
});

module.exports = router;
