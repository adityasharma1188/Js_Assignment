function removeDuplicates(arr) {
  return [...new Set(arr)];
}

let numbers = [1, 2, 3, 2, 4, 1, 5, 3];
console.log(removeDuplicates(numbers));
