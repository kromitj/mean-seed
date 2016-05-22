var schema = {
  title:  [String, ["articleTitle"]],
  author: [String, ["name"]],
  body:   [String, ["paragraph"]],
  comments: [[{ body: String, date: Date }], ["paragraph", "date"]],
  date: [{ type: Date, default: Date.now }, ["date", "dateNow"]],
  hidden: [Boolean, ["boolean"]],
  meta: [{ votes: Number, favs:  Number }, ["randInt", "randInt"]]
};

{
  "title": "Yo yo ma",
  "author": "Susan Boozer",
  "body": "blah blah blaH blah",
  "comments": [{ "type": "june 22 1980",  "default": "june 12, 2016" }],
  "hidden": false,
  "meta": { 'votes': 12, 'favs':  0 }
  }

  var schema = {
    f_name: [ String, ["fName"]],
    l_name: [ String, ["lName"]],
    comments: [
      [ { body: String, date: Date } ], ["paragraph", "dateTime"],
    ]
  }