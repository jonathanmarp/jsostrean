/*******************************************************\
 *              COPYRIGHT 2020 - 2025                  *
 *******************************************************
 *   Have privacy police this made by website          *
 *   https://jonathanmarpaung.rf.gd/                   *
 *   this for publish CODE                             *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

const process = require('process');

exports.jsostream = function(callback) {
    try {
        callback(process.argv.length, process.argv);
    } catch (err) {
        console.log(err);
    }
}
