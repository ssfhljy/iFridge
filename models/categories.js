var Mongoose = require('mongoose');

var CategorySchema = new Mongoose.Schema({
	_id: String,//Mongoose.Schema.ObjectId,
    name:String
    // possiblely need more fields: e.g. #items, #red, #yellow, etc. 
});

exports.Category = Mongoose.model('category', CategorySchema);