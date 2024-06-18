const convertToCelsius = function(fahrenheitTemp, celsiusTemp,celsiusDecimalTemp) {
  celsiusTemp = (fahrenheitTemp - 32) * 5/9;
  celsiusDecimalTemp = Math.round(celsiusTemp * 10) / 10
  return celsiusDecimalTemp
};

const convertToFahrenheit = function(CelsiusTemp, FahrenheitTemp, FahrenheitDecimalTemp) {
  FahrenheitTemp = (CelsiusTemp * 9/5) + 32
  FahrenheitDecimalTemp = Math.round(FahrenheitTemp * 10) / 10
  return FahrenheitDecimalTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
