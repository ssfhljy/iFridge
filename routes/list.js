// Get all of our friend data
// var models = require('../models/items');

var models = require('../models/models');

exports.showList = function(req, res){

	var cid = req.params.id;

	models.Item.find({"category":cid}).populate('category').exec(afterQuery);


	function afterQuery(err, list) {

		if(err) console.log(err);

		res.render('list', { 'list':list });
		// res.json(list);
	}
};
