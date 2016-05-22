var MeanSeed = require('../index.js');
var schemas = require('require-all')(__dirname + '/schemas');
var blogSchemas = schemas.blogSchema;
var userSchemas = schemas.userSchema;

var blog = MeanSeed.init("heroes", "blah");


blog.defineSchema(blogSchemas.schema);
blog.generateModel();
blog.defineFakerSchema(blogSchemas.fakerSchema);
blog.generateSeeds(10)
blog.exportToJSONFile();
blog.exportToDBTerminal();


// var user = MeanSeed.init("heroes", "people");
// user.defineSchema(userSchemas.schema);
// user.generateModel();
// user.defineFakerSchema(userSchemas.fakerSchema);
// user.generateSeeds(10);
// user.exportToJSONFile();
// user.exportToDBTerminal();
