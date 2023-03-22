let sum = 0;
const numbers = [65, 44, 12, 4];

// First
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }

// Second
// numbers.forEach((item) => {
//   sum += item;
// });

// Third
numbers.forEach((item) => (sum += item));

console.log(numbers);
console.log(sum);

const nums = [2, 3, 4, 5];

nums.forEach(f1);

// Squire each number and place back in the array

function f1(item, index, arr) {
  arr[index] = item ** 2;
}

console.log(nums);
