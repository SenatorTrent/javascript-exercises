const repeatString = function(string, x) {
    if(x>0){
        let repeat = string;
        while (x-1>0){
            string += repeat;
            x--;
        }
    return string;
    }
    else if (x<0){
        return "ERROR";
    }
    return "";
};

// Do not edit below this line
module.exports = repeatString;
