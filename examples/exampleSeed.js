var MeanSeed = require('../index.js');

var mongooseSchema = {
  title: String,
  author: String,
  body: String,
  comments: [{body: String, author: String}]
};

var fakerSchema = function() {
  return { 
    title: this.faker.fetch("hacker", "phrase"),
    author: this.faker.fetch("name", "lastName"),
    body: this.faker.fetch("lorem", "paragraph"),
    comments: [{body: this.faker.fetch("lorem", "paragraph"), author: this.faker.fetch("name", "firstName")}]
  }
}


var user = MeanSeed.init("heroes", "blah");
user.defineSchema(mongooseSchema);
user.generateModel();
user.defineFakerSchema(fakerSchema);
user.generateSeeds(10)
user.exportToJSONFile();
user.exportToDBTerminal();


