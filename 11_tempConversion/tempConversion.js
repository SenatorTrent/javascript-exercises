
function rounder(x){
  return !Number.isInteger(x) ? Number(x.toFixed(1)): x;
}
const convertToCelsius = function(f) {
  //Given F
  return rounder((f-32)/1.8);
};

const convertToFahrenheit = function(c) {
  //Given C
  return rounder(c*9/5+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
