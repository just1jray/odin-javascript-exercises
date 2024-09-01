const convertToCelsius = function(fTemp) {
  return Math.round(((fTemp - 32) / 1.8) * 10) / 10
};

const convertToFahrenheit = function(cTemp) {
  return Math.round(((cTemp * 1.8) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
