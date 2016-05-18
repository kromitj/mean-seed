var fs = require('fs');
function MeanSeed(dbName, collectionName, shouldDbDrop) {
  this.database = dbName;
  this.collection = collectionName;
  this.dbDrop = shouldDbDrop || false;
};

MeanSeed.prototype.defineSchema = function(schema) {
  this.schemaTemplate = schema;
};

MeanSeed.prototype.generateSeedData = function(seedCount, JSONFileLocation) {
  var fakerList = require('./modules/fakerList.js');
  var $this = this;  
  var seeds = [];
  var fields = Object.keys(this.schemaTemplate);
  
  var genSeeds = (function pushSeeds(seedCount, seeds) {
    if (seedCount == 0) { return seeds }
    var seed = {};
    for (var field in fields) {
      var fieldType = $this.schemaTemplate[fields[field]];      
      var fieldValue = fakerList.getDataType(fieldType);
      seed[fields[field]] = fieldValue();
    }
    seeds.push(seed);
    seedCount = seedCount-1;
    return pushSeeds(seedCount, seeds)
  })(seedCount, seeds);

  $this.seedData = seeds;
  $this.exportToJSON(JSONFileLocation);
};  

MeanSeed.prototype.exportToJSON = function(JSONFileLocation) {
  this.JSONFile = JSONFileLocation || "seed.json";
  $this = this
  fs.writeFile(this.JSONFile , JSON.stringify(this.seedData, null, "  "), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved to ./" + $this.JSONFile);
  }); 
};

MeanSeed.prototype.exportToDB = function() {
  $this = this;
  var sys = require('sys')
  var exec = require('child_process').exec;  
  function puts(error, stdout, stderr) { sys.puts(stdout) }; 
  exec("mongoimport --db " + this.database + " --collection " + this.collection + " --type json --file " + this.JSONFile + " --jsonArray");
  console.log("MeanSeed just exported: ./" + this.JSONFile + ", to the collection: " + this.collection + ", inside the database: " + this.database) 
}

exports.init = function(dbName, collectionName, shouldDbDrop) {
var newMeanSeed = new MeanSeed(dbName, collectionName, shouldDbDrop);
  return newMeanSeed;
};