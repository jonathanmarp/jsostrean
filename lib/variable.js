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
