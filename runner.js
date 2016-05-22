var MeanSeed = require('meanSeed');

var mongooseSchema = {
  title: String,
  author: String,
  body: String,
  comments: [{body: String, author: String}]
};

var fakerSchema = function() {
  return { 
    title: this.faker.fetch("articleTitle"),
    author: this.faker.fetch("lName"),
    body: this.faker.fetch("paragraph"),
    comments: [{body: this.faker.fetch("paragraph"), author: this.faker.fetch("fName")}]
  }
}


var user = new MeanSeed("heroes", "blah");
user.singleSeed();
user.defineSchema(mongooseSchema);
user.generateModel();
user.defineFakerSchema(fakerSchema);
user.generateSeeds(10)
user.exportToJSONFile();
user.exportToDBTerminal();


