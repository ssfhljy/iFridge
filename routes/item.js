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

exports.deleteItem = function(req, res) {
	var itemID = req.params.id;

	// find the Item and remove it
	// YOU MUST send an OK response w/ res.send();
	models.Item
		.find({"_id": itemID.toString()})
		.remove()
		.exec(afterRemoving);

	function afterRemoving(err) { // this is a callback
		if(err) {
			console.log(err); 
			res.send(500); 
		}
		res.redirect('/');
	}
};