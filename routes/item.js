// Get all of our friend data
var data = require('../data.json');

exports.showItem = function(req, res){
	console.log(data);
	res.render('item', data);
};