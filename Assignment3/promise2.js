//  Write a promise that resolves with "Eligible" if age ≥ 18, otherwise rejects with "Not
// Eligible".
let age = 17;

let checkAge = new Promise((resolve, reject) => {
  if (age >= 18) {
    resolve("Eligible");
  } else {
    reject("Not Eligible");
  }
});

checkAge
  .then((message) => {
    console.log("Right", message);
  })
  .catch((error) => {
    console.log("Wrong", error);
  });
