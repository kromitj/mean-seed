function MeanSeed(dbName, collectionName) {
  this.dbName = dbName;
  this.collectionName = collectionName
  this.mongoose = require('mongoose');
  this.faker = require('./modules/fakerList.js'); 
  this.fs = require('fs');

  this.mongoose.createConnection("mongodb://localhost/" + dbName);
  this.Schema = this.mongoose.Schema;
  console.log("mongodb://localhost/" + dbName);
}

MeanSeed.prototype.defineSchema = function(schema) {
  this.mongooseSchema = new this.Schema(schema);
}

MeanSeed.prototype.generateModel = function() {
  
  this.mongooseModel = this.mongoose.model(this.collectionName, this.mongooseSchema)
};

MeanSeed.prototype.defineFakerSchema = function(fakerSchema) {
  this.fakerSchema = fakerSchema;
}

MeanSeed.prototype.multipleSeedArray = function(seedCount, propertySchema) {
  var records = [];
  for(var i = 0; i < seedCount; i++) {
    records.push(propertySchema);
  };
  return records;
}

MeanSeed.prototype.generateSeeds = function(seedCount) {
  var seeds = [];
  var properties = this.getSchemaProperties();
  while (seedCount > 0) {
    seeds.push(this.fakerSchema());
    seedCount--;
  }
  console.log(seeds);
  this.seedData = seeds;
};

MeanSeed.prototype.getSchemaProperties = function() {
  return Object.keys(this.mongooseSchema);
};

MeanSeed.prototype.exportToJSONFile = function(JSONFileLocation) {
  this.JSONFile = JSONFileLocation || "seed.json";
  this.fs.writeFile(this.JSONFile , JSON.stringify(this.seedData, null, '\t'), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved to ./" + this.JSONFile);
  }); 
};

// Can't get this to work properly
MeanSeed.prototype.exportToDB = function() {
  var $this = this;
  var seedData =this.seedData;
  var db = this.mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    for (record in seedData) {
      var newRecord = new $this.mongooseModel(seedData);
      newRecord.save(function(err, newRecord) {
        if(err) return console.error(err)
      });
    };
  });
}

// this way is glitchy and doesn't use mongoose at all
MeanSeed.prototype.exportToDBTerminal = function() {
  var dbName = this.dbName;
  var collection = this.collectionName;
  var JSONFile = this.JSONFile;
  var sys = require('sys')
  var exec = require('child_process').exec;  
  function puts(error, stdout, stderr) { sys.puts(stdout) }; 
  exec("mongoimport --db " + dbName + " --collection " + collection + " --type json --file " + "./" + JSONFile + " --jsonArray");
  console.log("MeanSeed just exported: ./" + JSONFile + ", to the collection: " + collection + ", inside the database: " + dbName); 
}

// MeanSeed.prototype.singleSeed = function() {
//   var kittySchema =this.mongoose.Schema(mongooseSchema);
//   var Kitten = this.mongoose.model('Kitten', kittySchema);
//   var fluffy = new Kitten({ 
//     title: "yooo",
//     author: "mitch lroska",
//     body: "dsfhkasdjfhkdasjfhadlkjfhldksjfldsk",
//     comments: [
//       {
//         body: "yoodfado", 
//         author: "billy bob"
//       }, 
//       {
//         body: "fooshodoo", 
//         author: "Greag man"
//       }
//     ]
//   });
//   fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   });
// }

exports.init = function(dbName, collectionName) {
var newMeanSeed = new MeanSeed(dbName, collectionName);
  return newMeanSeed;
};