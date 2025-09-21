// Write a rejected promise and handle the error with .catch().
let myPromise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});
myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
