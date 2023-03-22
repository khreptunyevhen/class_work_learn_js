const arr = [1, 2, 3];

// push pop shift unshift

arr.push(4);
arr.push(5);

console.log(arr);

let x = arr.pop();

console.log("The pop value taken out = " + x);
console.log(arr);

arr.unshift("A");
console.log(arr);
let m = arr.shift();
console.log("The pop value taken out = " + m);
console.log(arr);

const a = [1, 2];
const b = [3, 4];

b.push(a.shift());
console.log(a);
console.log(b);

console.log("-------------------- includes -------------");
const fruit = ["Banana", "Orange"];
console.log(fruit.includes("Orange"));
