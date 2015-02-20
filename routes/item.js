// Get all of our friend data
var data = require('../data.json');

exports.showItem = function(req, res){
	// console.log(data);
	// res.render('item', data);
	var itemID = req.params.id;
	// console.log(itemID);
	itemID = parseInt(itemID);

 	var item = data['items'][itemID]; // of by one, our first project has index 0
 	// console.log(data['items'][itemID]);
 
  	res.render('item', item);
};