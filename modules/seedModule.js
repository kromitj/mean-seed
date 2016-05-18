function MeanSeed(dbName, collectionName, shouldDbDrop) {
  this.database = dbName;
  this.collection = collectionName;
  this.dbDrop = shouldDbDrop || false;
};

MeanSeed.prototype.defineSchema = function(schema) {
  this.schemaTemplate = schema;
};

MeanSeed.prototype.generateSeedData = function(seedCount) {
  var fakerList = require('../modules/fakerList');
  var seeds = [];
  function pushSeeds(seedCount, seeds) {
    
  }
};

exports.init = function(dbName, collectionName, shouldDbDrop) {
var newMeanSeed = new MeanSeed(dbName, collectionName, shouldDbDrop);
  return newMeanSeed;
};