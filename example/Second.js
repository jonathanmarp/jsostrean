const jso = require('./jsostream');

jso.functions("Play", (array) => {
  jso.print(array[0], array[1]);
})

jso.jsostream((argc, argv) => {
  jso.call("Play", ...["Hello, ", "World"]);
  return 0;
})
