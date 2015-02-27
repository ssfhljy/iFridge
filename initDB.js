
/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_database_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
// var userModel = require('./models/users');
// var categoryModel = require('./models/categories');
// var itemModel = require('./models/items');
var model = require('./models/models'); 

// var categoryModel = require('./models/categories');
// var userModel = require('./models/users');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'ifridge';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);


// Do the initialization here

// Step 1: load the JSON data

var user_json = require('./json/user.json');
var cat_json = require('./json/category.json');
var item_json = require('./json/item.json');
// var item_json = require('./items.json');

// Step 2: Remove all existing documents


// userModel.User
model.User
  .find()
  .remove()
  .exec(onceClearUsers); // callback to continue at

// Step 3: load the data from the JSON file
function onceClearUsers(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = user_json.length;
  for(var i=0; i<user_json.length; i++) {
    var json = user_json[i];
    // var u = new userModel.User(json);
    var u = new model.User(json);

    u.save(function(err, u) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        //mongoose.connection.close();
      }
    });
  }
}

model.Category
// categoryModel.Category
  .find()
  .remove()
  .exec(onceClearCategories); // callback to continue at

function onceClearCategories(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = cat_json.length;
  for(var i=0; i<cat_json.length; i++) {
    var json = cat_json[i];
    // var item_json = json['category_items'];
    // var item_array = new Array(json['category_items'].length);
    // for (var j = 0; j < json['category_items'].length; j++) {
    //   item_array[j] = new models.Item(item_json);
    // }

    // var cat = new models.Category({category_name: json['category_name'], category_items: item_array});
    // var cat = new categoryModel.Category(json);
    var cat = new model.Category(json);

    cat.save(function(err, cat) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        //mongoose.connection.close();
      }
    });
  }
}



model.Item
// itemModel.Item
  .find()
  .remove()
  .exec(onceClear); // callback to continue at

function onceClear(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = item_json.length;
  for(var i=0; i<item_json.length; i++) {
    var json = item_json[i];
    // var item_json = json['category_items'];
    // var item_array = new Array(json['category_items'].length);
    // for (var j = 0; j < json['category_items'].length; j++) {
    //   item_array[j] = new models.Item(item_json);
    // }

    // var cat = new models.Category({category_name: json['category_name'], category_items: item_array});
    // var it = new itemModel.Item(json);
    var it = new model.Item(json);

    it.save(function(err, it) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        mongoose.connection.close();
      }
    });
  }
} 

