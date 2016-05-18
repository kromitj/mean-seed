var faker = require('faker');
var list = {
  f_name: function() {
    return faker.name.firstName()
  },
  l_name: function() {
    return faker.name.lastName()
  },
  username: function() {
    return faker.internet.userName()
  },
  passwordDefault: function() {
    return "password"
  },
  paragraph: function() {
    return faker.lorem.paragraph()
  },
  articleTitle: function() {
    return faker.hacker.phrase()
  },
}

exports.getDataType = function(dataType) {
  return list[dataType];
};
exports.getList = function() {
  return list;
};