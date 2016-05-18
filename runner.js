var isolateTheFields = function(schemaTemplate) {
  return Object.keys(schemaTemplate);
 };

 var generateSeedData = function(seedCount, schemaTemplate, fakerList) {
    var fields = isolateTheFields(schemaTemplate);
    var seeds = [];
    while (seedCount >0) {
      var seed = {}
      for (var field in fields) {
        var fieldType = schemaTemplate[fields[field]];
        var fieldValue = fakerList[fieldType];
        seed[fields[field]] = fieldValue();
      }
      seeds.push(seed);
      seedCount--;
    }
    return seeds
 }; 

 var schemaToSeedData = function(seedCount, schemaTemplate) {
  var fields = isolateTheFields(schemaTemplate);
  return fields;

 } 

 var fieldTypes = {
  f_name: function() {
    var pool = ['Mitch','Sarah','Natalie','Billy','George','Corey','Holly','Kenny'];  
    console.log("inside f_name prop"); 
    return generateRandomOption(pool);
  },
  l_name: function() {
    var pool = ['Mitchell','Vowell','Portnam','Holliday','Costanza','Smith','Hunter','Rogers'];    
    return generateRandomOption(pool);
  },
  username: function() {
    var pool = ['bikerDude','prettyInBlack','spicyAstronaut','BfFs_BeCkY_AmAnDa_N_mE','naderForPrez2020','Usa_Baby','CubsFan4Eva','TheDeclineOfSociety'];    
    return generateRandomOption(pool);
  },
  passwordDefault: function() {
    return "password"
  },
  paragraph: function() {
    var pool = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iste, adipisci odit, nihil perspiciatis assumenda veniam ratione quia labore aliquid deserunt nam rem porro ullam, hic. Inventore deleniti dolores deserunt.'];    
    return generateRandomOption(pool);
  },
  articleTitle: function() {
    var pool = ["Opera Singer Can't Stop Farting After Surgery, Loses Job" ,'Man accused of Killing His Lawyer, Recieves a New Attorney',"Missippi's Literacy Program Shows Improvement",'Man eats Underwear to Beat Breathalyzer',"New Tech Isn't Cool Anymore, Says Kanye West",'People think, But do You?','Study Finds Men are More Likley to Die While Intoxicated','Chick Accuses Some of Her Male Colleages of Sexism'];    
    return generateRandomOption(pool);
  },
}

var generateRandomOption = function(options) {
  var optionCount = options.length;
  var randOption = Math.floor((Math.random() * optionCount));
  console.log(randOption);
  return options[randOption];
};

var a = generateSeedData(4, {"f_name":"f_name"}, fieldTypes);
console.log(a);