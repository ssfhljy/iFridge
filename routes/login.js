// Get all of our friend data
var data = require('../data.json');

exports.signIn = function(req, res){
	console.log(data);
	res.render('login', data);
};