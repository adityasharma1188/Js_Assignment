// check prime number

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i ** i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
const number = 5;
if (isPrime(number)) {
  console.log(number + " is a prime number ✅");
} else {
  console.log(number + " is NOT a prime number ❌");
}
