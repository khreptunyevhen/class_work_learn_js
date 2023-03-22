for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

console.log("----------------------------");

for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}

console.log("----------------------------");

let i = 0;
for (; i <= 10; i++);
{
  console.log(i);
}

console.log("----------------------------");

let total_length = 0;

const my_array = ["Apple", "Pear", "Orange", "Banana"];
console.log(my_array[1][1]);

for (let i = 0; i < my_array.length; i++) {
  console.log(my_array[i]);
  total_length += my_array[i].length;
}

console.log("Average = " + total_length / my_array.length);
