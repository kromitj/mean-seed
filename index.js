var fs = require('fs');

function MeanSeed(mongooseObj, collectionName, shouldDbDrop) {
  this.mongoose = mongooseObj;
  // this.dbConnection = this.mongoose.connection;
  this.collection = collectionName;
  this.dbDrop = shouldDbDrop || false;
};

MeanSeed.prototype.defineSchema = function(schema) {
  this.fields = Object.keys(schema);
  this.schemaTemplate = this.mongoose.Schema(schema);
  this.model = this.mongoose.model(this.collection, this.schemaTemplate)
};

MeanSeed.prototype.generateSeedData = function(seedCount, fakerTypes, JSONFileLocation) {
  var fakerList = require('./modules/fakerList.js');  
  var $this = this;  
  var seeds = [];
  var genSeeds = (function pushSeeds(seedCount, seeds) {
    if (seedCount == 0) { return seeds }
    var seed = {};
    for (var field in $this.fields) {
      var fieldType = fakerTypes[field];      
      var fieldValue = fakerList.getDataType(fieldType)();
      seed[$this.fields[field]] = fieldValue;    }
    seeds.push(seed);
    seedCount = seedCount-1;
    return pushSeeds(seedCount, seeds);
  })(seedCount, seeds);
  this.seedData = seeds;
  this.exportToJSON(JSONFileLocation);
} 
  

MeanSeed.prototype.exportToJSON = function(JSONFileLocation) {
  this.JSONFile = JSONFileLocation || "seed.json";
  var $this = this
  fs.writeFile(this.JSONFile , JSON.stringify(this.seedData, null, "  "), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved to ./" + $this.JSONFile);
  }); 
};

MeanSeed.prototype.exportToDB = function() {
  var $this = this;
  var seedData = this.seedData;
  var db = this.mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    for (record in seedData) {
      var newRecord = new $this.model(seedData);
      newRecord.save(function(err, newRecored) {
        if(err) return console.error(err)
      });
      console.log("Seeding..." + JSON.stringify(seedData, null, ""));
    };
  }, function () {
    db.close();
  });

}

exports.init = function(mongooseObj, collectionName, shouldDbDrop) {
var newMeanSeed = new MeanSeed(mongooseObj, collectionName, shouldDbDrop);
  return newMeanSeed;
};