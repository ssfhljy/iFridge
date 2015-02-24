var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var ItemSchema = new Mongoose.Schema({
  // fields are defined here
    // "name": String,
    // "iid": String,
    // "imageURL": String,
    // "dateExp": Date,
    // "dateAdded": Date,
    // "note": ""
    "name": String,
    "user": {
        type: String,//Schema.ObjectId,
        ref: 'users'
    },
    "category":{
        type: String,//Schema.ObjectId,
        ref: 'categories'
    }, 
    "imageURL": String,
    "dateExp": Date,
    "dateAdded": Date,
    "note": ""
});

exports.Item = Mongoose.model('item', ItemSchema);
