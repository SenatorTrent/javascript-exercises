const removeFromArray = function() {
    let baseArr = arguments[0];
    exclude = [];
    for (let i=1; i<arguments.length; i++){
        exclude.push(arguments[i]);
    }

    for (let i=0; i<baseArr.length; i++){
        if (exclude.includes(baseArr[i])){
            baseArr.splice(i, 1);
            i--;
        }
    }
    return baseArr;
};

// Do not edit below this line
module.exports = removeFromArray;
