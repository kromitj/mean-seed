
var MeanSeed = require('../index.js');
mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/heroes');


var user = MeanSeed.init(mongoose, "User");

user.defineSchema({"f_name": String, "l_name": String, "username": String, "password_digest": String,})

user.generateSeedData(10, ["fName", "lName", "username", "passwordDefault"]);

user.exportToDB();



var article = MeanSeed.init(mongoose, "Article")

article.defineSchema({"title": String, "content": String})

article.generateSeedData(10, ["articleTitle","paragraph"])

article.exportToDB();






