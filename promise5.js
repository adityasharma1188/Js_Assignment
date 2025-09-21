//  Write a promise that takes a string and resolves with its uppercase version
let myPromise = new Promise((resolve) => {
  resolve("helloworld".toUpperCase());
});
myPromise.then((result) => {
  console.log(result);
});
