// Get all of our friend data
var data = require('../data.json');

exports.showList = function(req, res){
	console.log(data);
	res.render('list', data);
};