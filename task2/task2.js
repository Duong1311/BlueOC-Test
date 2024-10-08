function sumOfTopTwoNumbers(arr) {
  if (arr.length < 2) return null;
  arr.sort((a, b) => b - a);
  console.log(arr);
  return arr[0] + arr[1];
}

console.log(sumOfTopTwoNumbers([1, 4, 2, 3, 5])); // Output: 9
console.log(sumOfTopTwoNumbers([10, 20, 30, 40, 50])); // Output: 90
console.log(sumOfTopTwoNumbers([-1, -5, -3, -4, -2])); // Output: -3
console.log(sumOfTopTwoNumbers([100, 200])); // Output: 300
console.log(sumOfTopTwoNumbers([0])); // Output: 0
