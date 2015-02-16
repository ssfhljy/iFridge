// Get all of our friend data
var data = require('../category.json');
var item = require('../data.json');

exports.view = function(req, res){
	console.log(item);
	res.render('index', data);
};