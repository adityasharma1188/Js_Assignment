async function sayHello() {
  return "Hello Async";
}
async function run() {
  const message = await sayHello();
  console.log(message);
}
run();
