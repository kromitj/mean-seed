
var fakersList = require('./modules/fakerList.js');
var meanSeed = require('./modules/meanSeed.js');

var seedData = meanSeed.schemaToSeedData(10, {"f_name":"f_name"}, fakersList);
