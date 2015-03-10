// Get all of our friend data
// var itemModel = require('../models/items');
var models = require('../models/models');

exports.view = function(req, res){

	models.Category.find().exec(afterQuery);

	function afterQuery(err, categories) {

		if(err) console.log(err);

		res.render('index', { 'categories': categories });

		// random page alternate for A/B Test
		/*
		var random_num = Math.random();
  		if(random_num > 0.5){
			res.render('index', { 'categories': categories });
		}else{
			res.render('index_alternate', { 'categories': categories });
		}
		*/
	}
};

