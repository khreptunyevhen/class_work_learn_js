input_array = [5, 4, 2, 7, 9, 3];

let sum = 0;

// see: for-in for-of

console.log("------------------- for in ---------------------");

for (const index in input_array) {
  // console.log(index); // return index
  console.log(input_array[index]); // return elements
}

console.log("------------------- for of ---------------------");

for (const elem of input_array) {
  console.log(elem); // return elements
}

console.log("-------------- continue -----------------");

let students = ["Joe", "Black", "Joe", "Mada"];

for (const elem of students) {
  if (elem == "Joe") {
    continue;
  }

  console.log(elem);
}

console.log("----------------- break ----------------");

for (const elem of students) {
  if (elem == "Black") {
    break;
  }

  console.log(elem);
}
