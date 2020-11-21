declare function require(name:string);
const jso = require('./jsostream');

jso.functions("Play", (array) => {
  jso.print(array[0], array[1]);
})

jso.jsostream((argc, argv) => {
  jso.call("Play", ...["Hello, ", "World"]);
  return 0;
})

// Move This File To Root Where jsostream.js location or change require to jsostream.js location
