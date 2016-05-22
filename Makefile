mean-test:
	./node_modules/.bin/mocha --reporter spec

 .PHONY: test

mean-makefile:
	cp Makefile ../MakeFile

seedsfile:
	touch seeds.js
	echo	\
	"var MeanSeed = require('meanSeed');\n\
	var schemas = require('require-all')(__dirname + '/schemas');\n"\
	> seeds.js

schema:
	mkdir -p schemas
	cd schemas; touch ${NAME}-schemas.js;	\
	echo	\
	"module.exports = {\n \
	\tschema: {\n\t\t// property and fakerType pairs of the schema go here, like:\n\t\t// f_name: faker.fetch("name", "firstName");\n\t},	\
	\n\n 	\
	fakerSchema: function() {\n\t\treturn {\n\t\t\t// property and fakerType pairs of the schema go here, like:\n\t\t\t// f_name: faker.fetch("name", "firstName");\n\t\t}\n\t}\n};\n"	\
	> 	${NAME}-schemas.js
	
	echo	\
	"var ${NAME}Schemas = schemas.${NAME}Schemas;\n\
	var ${NAME} = MeanSeed.init(\"${DB}\", \"${NAME}\");\n\
	${NAME}.defineSchema(${NAME}Schemas.schema);\n\
	${NAME}.generateModel();\n\
	${NAME}.defineFakerSchema(${NAME}Schemas.fakerSchema);\n\
	${NAME}.generateSeeds(${SEEDS});\n\
	${NAME}.exportToJSONFile();\n\
	${NAME}.exportToDBTerminal();\n"\
	>> seeds.js
	
	
			

	 