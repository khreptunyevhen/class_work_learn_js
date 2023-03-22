const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

const arr2 = ["2", "3", "4"];

const arra2_con = arr2.map((item) => +item); // the same arr2.map((item) => Number(item)); or arr2.map((item) => parseInt(item));

console.log(arra2_con);
