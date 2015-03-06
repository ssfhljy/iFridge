// Get all of our friend data
// var models = require('../models/items');

var models = require('../models/models');

exports.showList = function(req, res){

	var cid = req.params.id;

	models.Item.find({"category":cid}).populate('category').sort('dateExp').exec(afterQuery);


	function afterQuery(err, list) {

		if(err) console.log(err);

		var current = new Date();

		// console.log("length:"+Object.keys(list).length+"\n");
		console.log(list[0]);
		// change to be a helper function
		for(var i = 0; i < list.length; i++){
			list[i]['daysBeforeExp'] = Math.ceil((list[i]['dateExp']-current)/1000/3600/24);
		
			if (list[i]['daysBeforeExp'] <= 3){
				list[i]['color']="red";
			}
			if (list[i]['daysBeforeExp'] <= 0){
				list[i]['daysBeforeExp'] = "expired";
			}else{
				list[i]['daysBeforeExp'] = "exp. in " + list[i]['daysBeforeExp'] + " days";
			}
			// console.log(list[i]['dateExp'] + "-" + current + "=" + list[i]['daysBeforeExp']);
		}
		console.log("new json:"+list+"\n");

		res.render('list', { 'list':list });
		// res.json(list);
	}
};
