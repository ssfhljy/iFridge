
// var Mongoose = require('mongoose');


// var ItemSchema = new Mongoose.Schema({
//   // fields are defined here
//     // "name": String,
//     // "iid": String,
//     // "imageURL": String,
//     // "dateExp": Date,
//     // "dateAdded": Date,
//     // "note": ""
//     "name": String,
//     "user": {
//         type: Schema.ObjectId,
//         ref: 'user'
//     },
//     "category":{
//         type: Schema.ObjectId,
//         ref: 'category'
//     }, 
//     "imageURL": String,
//     "dateExp": Date,
//     "dateAdded": Date,
//     "note": ""
// });

// exports.Item = Mongoose.model('items', ItemSchema);

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var UserSchema = new Mongoose.Schema({
    _id: String,
    email: String,
    name: String,
    pwd: String
});

exports.User = Mongoose.model('user', UserSchema);

var CategorySchema = new Mongoose.Schema({
    _id: String,//Mongoose.Schema.ObjectId,
    name:String
    // possiblely need more fields: e.g. #items, #red, #yellow, etc. 
});

exports.Category = Mongoose.model('category', CategorySchema);

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
        ref: 'category'
    }, 
    "imageURL": String,
    "dateExp": Date,
    "dateAdded": Date,
    "note": ""
});

exports.Item = Mongoose.model('item', ItemSchema);
