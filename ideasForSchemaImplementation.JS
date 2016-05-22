var schema = {
  title:  [String, ["articleTitle"]],
  author: [String, ["name"]],
  body:   [String, ["paragraph"]],
  comments: [[{ body: String, date: Date }], ["paragraph", "date"]],
  date: [{ type: Date, default: Date.now }, ["date", "dateNow"]],
  hidden: [Boolean, ["boolean"]],
  meta: [{ votes: Number, favs:  Number }, ["randInt", "randInt"]]
};


var schema = {
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date}],
}

var schema = function() {
  title: fakerList(""),
  author: fakerList(""),
  body: fakerList(""),
  comments: [{ body: fakerList(""), date: fakerList("")}],
}



var faker = function() {
  return { 
    title: fakerList.getDataType("articleTitle"),
    author: fakerList.getDataType("lName"),
    body: fakerList.getDataType("paragraph"),
    comments: seedMultiple(2, { body: fakerList.getDataType("paragraph"), date: fakerList.getDataType("fName")}) }
}

var seedMultiple = function(count, propSchema) {
  var records = [];
  for(var i = 0; i < count; i++) {
    records.push(propSchema);
  };
  return records;
}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// http://stackoverflow.com/questions/15523514/find-by-key-deep-in-nested-json-object
// need to check if current level is obj and doesn't or does have lenght
// if it was a length its an array if not its an obj
// var goo = {
//   comments: [{ body: "dkdfjdkfjdkfjkdfjdkfjdkfj", date: "b;ahj"}]
// }
// // > goo["comments"].hasOwnProperty('length')
// true
// > goo["comments"][0].hasOwnProperty('length')
// false
// mongoose.connection.close();
// var iterateProperties = function(mongooseSchema) {
//   filledSchema = mongooseSchema;
//   Object.keys(mongooseSchema).forEach(function(property) {
//       var filledProperty = traverseProperty(property, fakerTypes);
//       filledSchema[property] = filledProperty;
//   })
// }

// var traverseProperty = function(property, index, fakerArray) {
//   if (property instanceof Array) {
//     return traverseProperty(property[0], index, fakerArray);
//   } else if (Object.keys(property).length > 0) {
//     var subProperties = Object.keys(property);
//     return traverseProperty(subProperties, index, fakerArray);
//   } else {
//     return fakerList.getValue(fakerArray.pop)
//   }
// }


var user = MeanSeed.init(mongoose, "User")
user.schema = {
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date}],
};
user.fakerSchema = function() {
  title: fakerList("hacker.phrase"),
  author: fakerList("name.firstname"),
  body: fakerList("lorem.paragraphs"),
  comments: [{ body: fakerList("lorem.paragraphs"), date: fakerList("date.past")}],
}



