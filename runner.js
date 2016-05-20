
const DB_NAME = "heroes";
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/' + DB_NAME);
var fakerList = require('./modules/fakerList.js'); 

var schema = {
  title:  [String, ["articleTitle"]],
  author: [String, ["name"]],
  body:   [String, ["paragraph"]],
  comments: [[{ body: String, date: Date }], ["paragraph", "date"]],
  date: [{ type: Date, default: Date.now }, ["date", "dateNow"]],
  hidden: [Boolean, ["boolean"]],
  meta: [{ votes: Number, favs:  Number }, ["randInt", "randInt"]]
};

var getMongooseSchema = function(schemaTemplate) {
  var properties = getSchemaProperties(schemaTemplate);
  var isolatedSchemaForMongoose = {};
  properties.forEach(function(property) {
    isolatedSchemaForMongoose[property] = schemaTemplate[property][0];
    return null;
  });
  return isolatedSchemaForMongoose;
};

var createMongooseSchema = function(mongoose, schema) {
  console.log(mongoose)
  return mongoose.Schema(schema);
};

var createMongooseModel = function(mongoose, collectionName, mongooseSchema) {
  return mongoose.model(collectionName, mongooseSchema);
};

var getSchemaProperties = function(schema) {
  return Object.keys(schema);
} 

var getSchemaNestedProperties = function() {

}

var getFakerTypes = function(schema) {
  return Object.keys(schema).map(function(property) {
    return schema[property][1];
  });
};

var generateSeedData = function(seedCount, schemaProps, fakerTypes, schema, JSONFileLocation) {
  var seeds = [];
  return generateSeed(seedCount, seeds, schemaProps, schema);
}

var generateSeed = function (seedsLeft, seedsMade, schemaProps, schema) {
  console.log("schema -------" + schema)
  if (seedsLeft == 0) { return seedsMade; }
  var seed = {};
  schemaProps.forEach(function(property) {
    seed[property] = schema[property][0];
  });
  seedsMade.push(seed);
  return generateSeed(--seedsLeft, seedsMade, schemaProps, schema);
};


var schemaForMongoose = getMongooseSchema(schema);
console.log("1")
var mongooseSchema = createMongooseSchema(mongoose, schemaForMongoose);
var schemaModel = createMongooseModel(mongoose, "user", mongooseSchema);
var schemaProperties = getSchemaProperties(schema);
var fakerTypes = getFakerTypes(schema);
var seedData = generateSeedData(10, schemaProperties, fakerTypes, schema);
console.log(seedData);




mongoose.connection.close();



