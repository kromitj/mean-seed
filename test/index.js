
var should = require('chai').should()
    , meanSeed = require('../index')
    , schemaToSeedData = meanSeed.schemaToSeedData;

describe('#meanSeed', function() {
  it('has property schemaToSeedData', function() {
    meanSeed.should.have.property('schemaToSeedData');
  });  
});
describe('#schemaToSeedData', function() {
  it('returns the keys of schemaTemplate', function() {
   schemaToSeedData(10, {"f_name":"f_name","l_name":"l_name"})[0].should.equal('[');
  });  
});