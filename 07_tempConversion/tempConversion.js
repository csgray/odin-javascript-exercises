const convertToCelsius = function (fahrenheit) {
  // toFixed rounds to 1 decimal place but returns a string
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  // toFixed rounds to 1 decimal place but returns a string
  return Number((celsius * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
