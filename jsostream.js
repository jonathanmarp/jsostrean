/*******************************************************\
 *              COPYRIGHT 2020 - 2025                  *
 *******************************************************
 *   Have privacy police this made by website          *
 *   https://jonathanmarpaung.rf.gd/                   *
 *   this for publish CODE                             *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

const process = require('process');
const http = require('http');
const fs = require('fs');

exports.readFile = function(nameFile, callback) {
    fs.readFile(nameFile, function(err, data) {
        callback(data, err);
    });
}

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

exports.appendFile = function(nameFile, contentFile, callback) {
    fs.appendFile(nameFile, contentFile, callback);
}

exports.openFile = function(nameFile, param, callback) {
    fs.open(nameFile, param, callback);
}

exports.writeFile = function(nameFile, contentFile, callback) {
    fs.writeFile(nameFile, contentFile, callback);
}

let nameFunctions = [];
let allFunctions = [];

exports.functions = function(nameFuntion, callback) {
    nameFunctions.push(nameFuntion);
    allFunctions.push(callback);
}

exports.call = function(nameFuntion, ...param) {
    for (let _0x01 = 0; _0x01 < nameFunctions.length; _0x01++) {
        if (nameFunctions[_0x01] == nameFuntion) {
            return allFunctions[_0x01](param);
        }
    }
    throw new Error('Error Not Get Functions');
    return 0;
}

exports.importFunctions = function(nameFunction) {
    for (let _0x01 = 0; _0x01 < nameFunctions.length; _0x01++) {
        if (nameFunctions[_0x01] == nameFunction) {
            return allFunctions[_0x01];
        }
    }
    throw new Error('Error Not Get Functions');
    return 0;
}

exports.deleteFunctions = function(nameFill) {
    let target;
    for (let _0x01 = 0; _0x01 < nameFunctions.length; _0x01++) {
        if (nameFunctions[_0x01] == nameFill) {
            if (_0x01 == 0) {
                nameFunctions.shift();
                allFunctions.shift();
                return 0;
            } else {
                target = _0x01;
            }
            break;
        }
    }
    nameFunctions.splice(target, target);
    allFunctions.splice(target, target);
}

exports.randomNumber = () => Math.random();
exports.randomString = function(_0x02 = 0) {
    let str = "qwertyuiopasdfghjklzxcvbnm";
    let result = "";
    str = str.split("");
    if (_0x02 == 0) {
        _0x02 = str.length;
    }
    for (let _0x01 = 0; _0x01 < _0x02; _0x01++) {
        result += str[Math.floor(Math.random() * str.length)];
    }
    return result;
}

class enums {
    constructor(x) {
        this._0x01 = [];
        this._0x02 = [0];
        for (let _0x02 = 0; _0x02 < x.length; _0x02++) {
            this._0x01.push(x[_0x02]);
            this._0x02.push(_0x02 + 1);
        }
    }
    changeFirstNumber(_0x01) {
        for (let _0x03 = 0; _0x03 < this._0x01.length; _0x03++) {
            this._0x02[_0x03] = _0x03 + _0x01;
        }
    }
    getEnum(_0x01) {
        for (let _0x02 = 0; _0x02 < this._0x01.length; _0x02++) {
            if (this._0x01[_0x02] == _0x01) {
                return this._0x02[_0x02];
            }
        }
        return null;
    }
}

exports.toChar = (text) => text.split("");
exports.toArrText = (text) => text.split(" ");
exports.int = (data) => parseInt(data);
exports.float = (data) => parseFloat(data);

exports.sort = function(_0x01) {
    let _0x02 = _0x01.length;
    for (let _0x03 = 0; _0x03 < _0x02; _0x03++) {
        for (let _0x04 = 0; _0x04 < _0x02; _0x04++) {
            if (_0x01[_0x04] > _0x01[_0x04 + 0x01]) {
                let _0x05 = _0x01[_0x04];
                _0x01[_0x04] = _0x01[_0x04 + 0x01];
                _0x01[_0x04 + 0x01] = _0x05;
            }
        }
    }
    return _0x01;
}

exports.enum = function(x) {
    return new enums(x);
}

exports.print = function(x, ...y) {
    let Str = "";
    Str += x;
    for (let _0x01 = 0; _0x01 < y.length; _0x01++) {
        Str += y[_0x01];
    }
    console.log(Str);
}

exports.jsostream = function(callback) {
    try {
        callback(process.argv.length, process.argv);
    } catch (err) {
        console.log(err);
    }
}

exports.runSave = function(functionsis) {
    try {
        functionsis();
    } catch(err) {
        return err;
    }
}

class Variable {
    constructor() {
        this.varName = [];
        this.varFill = [];
    }
    pushData(nameVar, fillData) {
        this.varName.push(nameVar);
        this.varFill.push(fillData);
    }
    getData(_0x01Var) {
        for(let _0x01 = 0; _0x01 < this.varName.length; _0x01++) {
            if(this.varName[_0x01] == _0x01Var) {
                return this.varFill[_0x01];
            }
        }
        return "_0b0wifniqfneoafboa";
    }
    DeleteData(nameVariable = null) {
        nameVariable = nameVariable.trim();
        if((nameVariable == null) || (nameVariable == "")) {
            throw new Error('Please Give Name Of Variable');
        }
        let target;
        for (let _0x01 = 0; _0x01 < this.varName.length; _0x01++) {
            if (this.varName[_0x01] == nameVariable) {
                if (_0x01 == 0) {
                    this.varName.shift();
                    this.varFill.shift();
                    return 0;
                } else {
                    target = _0x01;
                }
                break;
            }
        }
        this.varName.splice(target, target);
        this.varFill.splice(target, target);
    }
}

let _0x0a1Var = new Variable();

exports.var = function(nameVariable = null, fillVarible) {
    nameVariable = nameVariable.trim();
    if((nameVariable == null) || (nameVariable == "")) {
        throw new Error('Please Give Name Of Variable');
    }
    _0x0a1Var.pushData(nameVariable, fillVarible);
}

exports.vEquation = function(variableA, ...Variables) {
    let targetA = 0;
    for(let _0x01 = 0; _0x01 < _0x0a1Var.varName.length; _0x01++) {
        if(_0x0a1Var.varName[_0x01] == variableA) {
            targetA = _0x01;
        }
    }
    for(let _0x02 = 0; _0x02 < Variables.length; _0x02++) {
        for(let _0x01 = 0; _0x01 < _0x0a1Var.varName.length; _0x01++) {
            if(Variables[_0x02] == _0x0a1Var.varName[_0x01]) {
                _0x0a1Var.varFill[_0x01] = _0x0a1Var.varFill[targetA];
            }
        }    
    }
}

exports.vGet = function(nameVariable = null) {
    nameVariable = nameVariable.trim();
    if((nameVariable == null) || (nameVariable == "")) {
        throw new Error('Please Give Name Of Variable');
    }
    let src = _0x0a1Var.getData(nameVariable);
    if(src == "_0b0wifniqfneoafboa") {
        throw new Error('Name Variable Undefined');
    } else {
        return src;
    }
}

exports.vDelete = function(nameVariable = null) {
    nameVariable = nameVariable.trim();
    if((nameVariable == null) || (nameVariable == "")) {
        throw new Error('Please Give Name Of Variable');
    }
    _0x0a1Var.DeleteData(nameVariable);
}
