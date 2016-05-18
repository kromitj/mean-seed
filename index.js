
var isolateTheFields = function(schemaTemplate) {
  return Object.keys(schemaTemplate);
 };

 var generateSeedData = function(seedCount, schemaTemplate, fakerList) {
    var fakerList = require('./modules/fakerList.js');
    var fields = isolateTheFields(schemaTemplate);
    var seeds = []
    while (seedCount >0) {
      var seed = {}
      for (var field in fields) {
        var fieldType = schemaTemplate[fields[field]];
        var fieldValue = fakerList.getDataType(fieldType);
        seed[fields[field]] = fieldValue();
      }
      seeds.push(seed);
      seedCount--;
    }
    console.log(JSON.stringify(seeds, null, "  "))
    return JSON.stringify(seeds, null, "  ")
 }; 

exports.schemaToSeedData = function(seedCount, schemaTemplate) {

  return generateSeedData(seedCount, schemaTemplate);
 } 