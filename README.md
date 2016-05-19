# mean-seed yoooo

##How to use it

1 Navigate terminal to project directy and enter:
    
    npm install https://github.com/kromitj/mean-seed
2 Create a seed.js file at the root of your application

3 Require MeanSeed into seed.js
    
    var MeanSeed = require('meanSeed');
4 Create an instance of Meanseed, taking as arguments the name of the database and collection inside mongoDB:
    
               MeanSeed.init(dbName, collectionName)
        var User = MeanSeed.init("blog","User");

5 Define the schema of the collection:
    
    User.defineSchema({"f_name":"fName","l_name":"lName", "username":"username","password_digest":"passwordDefault"})

The object literal inside the above function call represents the structure of the schema. Each key represents what the field name will be called in the mongoDB collection and the value is assosiated with a matching property inside the ./modules/fakerList.js module, which when called generates a random value of that fieldType; here is the snippet of fakerList:

    var fakerList = {
      fName: function() {
        return faker.name.firstName();
      }
    }

So when you defineSchema, if you put as an argument: 

    User.defineSchema({"f_name":"fName"});

this will call the FName proptery of fakerList, which generates and returns a fake name

6 Generate the seed data and send it to a JSON file:
    
    User.generateSeedData(10, "./seeds/user.json")
First argument is how many seeds you want to make and the second is optional and states where the JSON will be created

7 Export the JSON file to the mongoDB database/collection
      
    User.exportToDB
8 Thats it, look inside a mongoDB shell to see if it seeded correctly:
    // connect to the database your app is linked to:
    use <databaseName> 
    ex:
    use blog
    
    // show all the collections inside the database(you should see the one you just seeded):
    show collections
    
    // you can all the seeds/records listed out for you, like this:
    db.<collectionName>.find()
    db.User.find()
      