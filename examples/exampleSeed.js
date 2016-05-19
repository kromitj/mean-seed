var MeanSeed = require('../index.js');
var user = MeanSeed.init("heroes","Haasddr", true);

user.defineSchema({"f_name":"fName", "l_name":"lName","username":"username", "password_digest":"passwordDefault"})
user.generateSeedData(10);
user.exportToDB();

var user = MeanSeed.init("heroes","Userdfsd", true);

user.defineSchema({"f_name":"fName", "l_name":"lName","username":"username", "password_digest":"passwordDefault"})
user.generateSeedData(10);
user.exportToDB();
