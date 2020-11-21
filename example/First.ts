declare function require(name:string);
const jso = require('./jsostream');

jso.jsostream((argc, argv) => {
	jso.var("Array", [4, 3, 2, 1]);
	jso.var("Result", jso.importFunctions("Sorting")(jso.vGet("Array")));
	jso.print(jso.vGet("Result"));
	jso.fstream("Result.txt").writeFile(jso.vGet("Result"), (err, data) => {
		if(err) throw err;
		console.log("Success");
	});
	jso.vDelete("Result");
	jso.deleteFunctions("Sorting");
	jso.vDelete("Array");
	return 0;
})

// Move This File To Root Where jsostream.js location or change require to jsostream.js location
