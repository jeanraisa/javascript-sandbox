//challenge1: Function that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.
function getCelsius(f) {
  const celsius = ((f - 32) * 5) / 9;
  return celsius;
}
//const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temp is ${getCelsius(50)} \xB0C`);

//Challenge2: Function that takes array of number and returns an object with min and max numbers in the array.
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}
console.log(minMax([1, 3, 6, 5, 4]));

//challenge3: IIFE(Immediately Invoked Function Expression) That takes in the length and width of rectangle outputs it to the console in a message as soon as the page loads.
(function (L, W) {
  const area = L * W;
  console.log(
    `The area of rectangle with length of ${L} and width of ${W} is equal to ${area} `
  );
})(5, 8);
