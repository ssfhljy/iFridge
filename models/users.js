var Mongoose = require('mongoose');

var UserSchema = new Mongoose.Schema({
	_id: String,
	email: String,
	name: String,
	pwd: String
});

exports.User = Mongoose.model('user', UserSchema);
