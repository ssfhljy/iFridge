// Get all of our friend data
var data = require('../data.json');
var categories = require('../category.json');

exports.showList = function(req, res){
	console.log(data);
	// console.log("What???");
	// console.log(req.params.id);
	// var catID = req.params.id;
	// // console.log(itemID);
	// catID = parseInt(catID);
	// var cat = categories['categories'][catID][0];
	// console.log("cat"+cat);
 // 	var items = data['items']; // of by one, our first project has index 0
 // 	console.log("cat_items"+cat_items);
 // 	int i = 0;
 // 	var cat_items
 // 	while(i < data['items'].length){
 //  		if (items[i]['category'] == cat) {
	// 		cat_items[j] = i
 //  		}
 //  	}
 //  	res.render('list', cat_items);
 res.render('list', data);
  	// res.json(item);
  	
};