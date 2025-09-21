async function throwError() {
  return Promise.reject("Something went wrong!");
}
async function run() {
  try {
    const result = await throwError();
    console.log(result);
  } catch (error) {
    console.log("Caught error:", error);
  }
}
run();
