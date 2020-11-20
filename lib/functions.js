/*******************************************************\
 *              COPYRIGHT 2020 - 2025                  *
 *******************************************************
 *   Have privacy police this made by website          *
 *   https://jonathanmarpaung.rf.gd/                   *
 *   this for publish CODE                             *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

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
