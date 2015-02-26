var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bikeSchema = new Schema ({
	title : String,
	name : String,
	type : String,
	owner : String
});

module.exports = mongoose.model('Bike', bikeSchema);