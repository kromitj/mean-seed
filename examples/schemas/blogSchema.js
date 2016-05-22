module.exports = {
  schema: {
    title: String,
    author: String,
    body: String,
    comments: [{body: String, author: String}]
  },

  fakerSchema: function() {
    return { 
      title: faker.fetch("hacker", "phrase"),
      author: faker.fetch("name", "lastName"),
      body: faker.fetch("lorem", "paragraph"),
      comments: [{body: faker.fetch("lorem", "paragraph"), author: faker.fetch("name", "firstName")}]
    }
  }
};