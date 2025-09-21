// Create a promise that resolves after 2 seconds with the message "Task Completed"
// and print it.

let mypromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task Completed");
  }, 2000);
});
mypromise.then((message) => {
  console.log(message);
});
