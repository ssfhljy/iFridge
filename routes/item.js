// Get all of our friend data
// var models = require('../models/items');
var models = require('../models/models');

exports.showItem = function(req, res){

  	var id = req.params.id;
  		
	models.Item.find({"_id":id}).populate('category').exec(afterQuery);

	function afterQuery(err, item) {
		console.log("test~~~: "+item.toString());
		if(err) console.log(err);
		console.log("item:"+item+"\n");
		res.render('item', item);
		// res.json(item);
	}

};