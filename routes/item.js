// Get all of our friend data
// var models = require('../models/items');
var models = require('../models/models');

exports.showItem = function(req, res){

  	var id = req.params.id;
  		
	models.Item.find({"_id":id}).populate('category').exec(afterQuery);

	function afterQuery(err, item) {
		// console.log("test~~~: "+item.toString());
		if(err) console.log(err);
		// var dateExp = dateFormatting(item[0]['dateExp']);
		// item[0]['dateExp'] = dateExp;
		// console.log("date exp:"+item[0]['dateExp']+";"+dateFormatting(item[0]['dateExp'])+"~~~~~~~~~~~\n");
		// console.log("item:"+item+"\n");
		res.render('item', {json: item, 
				helpers: {
		formatDate: 
		function(date){
			if (typeof(date) == "undefined") {
				return "Unknown";
			}
			return ((date.getMonth() + 1) 
				+ "/" + date.getUTCDate() 
				+ "/" + date.getFullYear());
		}}
	});
		// res.json(item);
	}
};

exports.deleteItem = function(req, res) {
	var iid = req.params.id;
	var cid = req.params.cid;

	console.log("cid:"+cid+",iid:"+iid+"\n");

	// find the Item and remove it
	// YOU MUST send an OK response w/ res.send();
	models.Item
		.find({"_id": iid.toString()})
		.remove()
		.exec(afterRemoving);

	function afterRemoving(err) { // this is a callback
		if(err) {
			console.log(err); 
			res.send(500); 
		}
		res.redirect('/list/'+cid);
	}
};

exports.createNewItem = function(req, res) {
	var form_data = req.body;
	console.log(form_data);

	// make a new Item and save it to the DB
	// YOU MUST send an OK response w/ res.send();
	var newItem = new models.Item({
		"name": form_data['name'],
        "user": form_data['user'],
        "category": form_data['category'],
        "imageURL": form_data['imageURL'],
        "dateExp": form_data['dateExp'],
        "dateAdded": form_data['dateAdded'],
        "note": form_data['note']
	});
	console.log("nothing\n");
	console.log("added:"+newItem.toString()+"\n");
	console.log("nothing\n");

	newItem.save(afterSaving);
	function afterSaving(err) { // this is a callback
		if(err) {
			console.log(err);
			res.send(500);
		}
		res.redirect('/');
	}
};

// helper
function dateFormatting(obj){
	return (obj.getMonth() + 1) 
		+ "/" + obj.getUTCDate() 
		+ "/" + obj.getFullYear();
}