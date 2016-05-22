var faker = require('../../modules/fakerList.js');
module.exports = {
  schema: {
    f_name: String,
    l_name: String,
    username: String
  },

  fakerSchema: function() {
    return { 
      f_name: faker.fetch("hacker", "phrase"),
      l_name: faker.fetch("name", "lastName"),
      username: faker.fetch("lorem", "paragraph")
    }
  }
};