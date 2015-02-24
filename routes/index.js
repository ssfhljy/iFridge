// Get all of our friend data
// var itemModel = require('../models/items');
var models = require('../models/models');

exports.view = function(req, res){

	models.Category.find().exec(afterQuery);

	function afterQuery(err, categories) {

		if(err) console.log(err);

		res.render('index', { 'categories': categories });
		// res.json(categories);
	}
};