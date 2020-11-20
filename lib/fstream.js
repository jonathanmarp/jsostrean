/*******************************************************\
 *              COPYRIGHT 2020 - 2025                  *
 *******************************************************
 *   Have privacy police this made by website          *
 *   https://jonathanmarpaung.rf.gd/                   *
 *   this for publish CODE                             *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

const fs = require('fs');

class Fstream {
    constructor(_0x01) {
        this.nameFile = _0x01;
    }
    writeFile(contentFile, callback) {
        fs.writeFile(this.nameFile, contentFile, callback);
    }
    openFile(param, callback) {
        fs.open(this.nameFile, param, callback);
    }
    appendFile(contentFile, callback) {
        fs.appendFile(this.nameFile, contentFile, callback);
    }
}

exports.fstream = (nameFile) => new Fstream(nameFile);
