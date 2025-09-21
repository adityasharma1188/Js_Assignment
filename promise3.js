// Create a promise chain where the first .then() multiplies a number by 2, the second
// .then() adds 5, and the final result is printed.

let number = 10;
let myPromise = new Promise((resolve, reject) => {
  resolve(number);
});
myPromise
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    return value + 5;
  })

  .then((finalResult) => {
    console.log("final Result:", finalResult);
  });
