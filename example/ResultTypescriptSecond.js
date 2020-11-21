var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var jso = require('./jsostream');
jso.functions("Play", function (array) {
    jso.print(array[0], array[1]);
});
jso.jsostream(function (argc, argv) {
    jso.call.apply(jso, __spreadArrays(["Play"], ["Hello, ", "World"]));
    return 0;
});
// Move This File To Root Where jsostream.js location or change require to jsostream.js location
