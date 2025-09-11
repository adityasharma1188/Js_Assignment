// Palindrome function

function isPalindrome(str) {
  str = str.toLowerCase();

  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("321"));
