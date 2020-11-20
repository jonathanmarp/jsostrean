/*******************************************************\
 *              COPYRIGHT 2020 - 2025                  *
 *******************************************************
 *   Have privacy police this made by website          *
 *   https://jonathanmarpaung.rf.gd/                   *
 *   this for publish CODE                             *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

const fs = require('fs');

exports.readFile = function(nameFile, callback) {
    fs.readFile(nameFile, function(err, data) {
        callback(data, err);
    });
}

exports.appendFile = function(nameFile, contentFile, callback) {
    fs.appendFile(nameFile, contentFile, callback);
}

exports.openFile = function(nameFile, param, callback) {
    fs.open(nameFile, param, callback);
}

exports.writeFile = function(nameFile, contentFile, callback) {
    fs.writeFile(nameFile, contentFile, callback);
}
