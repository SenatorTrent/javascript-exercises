const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a<0 || b<0 || typeof(a)!="number" || typeof(b)!="number"){
        return "ERROR";
    }
    if(a>b){
        big = a;
        small = b;
    }
    else{
        big = b;
        small =a;
    }
    let quickSum = (x) => (x*(x+1))/2;
    return quickSum(big) - quickSum(small-1);
};

// Do not edit below this line
module.exports = sumAll;
