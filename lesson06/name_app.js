let full_name = "Joe Dou";

let first;
let second;
let space = full_name.indexOf(" ");
first = full_name.slice(0, space);
second = full_name.slice(space + 1);
console.log(first);
console.log(second);
