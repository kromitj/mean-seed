function MeanSeed(mongooseObj, collectionName, shouldDbDrop) {
  this.mongoose = mongooseObj;
  this.collection = collectionName;
  this.dbDrop = shouldDbDrop || false;
};

var getMongooseSchema = function(schemaTemplate) {
  var properties = Object.keys(schemaTemplate);
  var isolatedSchemaForMongoose = {};
  properties.forEach(function(property) {
    isolatedSchemaForMongoose[property] = schemaTemplate[property][0];
    return null;
  });
  return isolatedSchemaForMongoose;
}

var createMongooseSchema = function(mongoose, schema) {
  console.log(mongoose)
  return mongoose.Schema(schema);
};

var createMongooseModel = function(mongoose, collectionName, schema) {
  return mongoose.model(collectionName, schema);
}

var getFakerTypes = function(schema) {
  return Object.keys(schema).map(function(property) {
    return schema[property][1];
  });
}


var generateSeedData = function(seedCount, fakerTypes, JSONFileLocation) {

}


var mongoose = require('mongoose');
var fakerList = require('./modules/fakerList');
mongoose.connect('mongodb://localhost/heroes');