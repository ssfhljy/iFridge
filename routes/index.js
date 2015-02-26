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

exports.addItem = function(req, res) {
	var form_data = req.body;
	console.log(form_data);

	// make a new Item and save it to the DB
	// YOU MUST send an OK response w/ res.send();
	var newItem = new models.Item({
		"title": form_data['Item_title'],
		"date": form_data['date'],
		"summary": form_data['summary'],
		"image": form_data['image_url']

		// "name": "Strawberries",
  //       "user": {"_id": "507f1f7733389439011"},
  //       "category": {"_id": "507f1f77bcf86cd799439011"},
  //       "imageURL": "http://www.crossroadsvapor.com/zen1/images/strawberry.jpg",
  //       "dateExp": "2/18/2015",
  //       "dateAdded": "2/1/2015",
  //       "note": ""
	});

	newItem.save(afterSaving);

	function afterSaving(err) { // this is a callback
		if(err) {
			console.log(err);
			res.send(500);
		}
		res.redirect('/');
	}
};

