const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function concat(arr1, arr2) {
  const arr = [];

  for (const elem of arr1) {
    arr.push(elem);
  }

  for (const elem of arr2) {
    arr.push(elem);
  }

  console.log(arr);
}

concat(arr1, arr2);
