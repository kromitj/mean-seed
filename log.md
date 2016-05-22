#Intended creation tools for MeanSeed

## From the Command Line create two schemas: people and blog

 $ make MeanSeed user, heroes, people, 10; blog, heroes, blog, 5 

###What this should do...

this creates a directory of the root call seedSchemas if not existing already
then in side creates a file named "userSchemas.js" & "blogSchemas.js"
and adds this boilerplate code: 

     module.exports = {
       schema: {
           property and dataType value pairs of the schema go here, like:
           f_name: String
       },

       fakerSchema: function() {
         return { 
             property and fakerType pairs of the schema go here, like:
             f_name: faker.fetch("name", "firstName");
         }
       }
     };

###It also creates a file in the root called "mean-seeds.js" with this boilerplate 

      var MeanSeed = require('meanSeed');
      var schemas = require('require-all')(__dirname + '/schemas');
      var userSchemas = schemas.userSchemas;
      var blogSchemas = schemas.blogSchemas

      var user = MeanSeed.init("heroes", "people");

      user.defineSchema(userSchemas.schema);
      user.generateModel();
      user.defineFakerSchema(userSchemas.fakerSchema);
      user.generateSeeds(10);
      user.exportToJSONFile();
      user.exportToDBTerminal();

      var blog = MeanSeed.init("heroes", "blog");

      user.defineSchema(blogSchemas.schema);
      user.generateModel();
      user.defineFakerSchema(blogSchemas.fakerSchema);
      user.generateSeeds(5);
      user.exportToJSONFile();
      user.exportToDBTerminal();

