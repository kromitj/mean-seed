var faker = require('faker');


var list = {
  fName: function() {
    return faker.name.firstName()
  },
  lName: function() {
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

exports.fetch = function(category, value) {
  return faker[category][value]();
};
exports.getList = function() {
  return list;
};