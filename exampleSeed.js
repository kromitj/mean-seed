var MeanSeed = require('./index.js');
var user = MeanSeed.init("heroes","User", true);

user.defineSchema({"f_name":"fName", "l_name":"lName","username":"username", "password_digest":"passwordDefault"})
user.generateSeedData(10, "exampleUser.json");
user.exportToDB();

var comment = MeanSeed.init("heroes","Comment", true);

comment.defineSchema({"title":"articleTitle", "content": "paragraph"});
comment.generateSeedData(10, "./exampleArticle.json");
comment.exportToDB();
