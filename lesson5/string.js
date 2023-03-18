let my_name = "Brendan Wood";

let my_last_name = my_name.slice(8, 13);
let my_last_name_negative_way = my_name.slice(-4);

console.log(my_last_name);
console.log(my_last_name_negative_way);
console.log(my_name);

function p(val) {
  console.log(val);
}

function main() {
  let str = "The quick brown fox jumped over the lazy dog.";
  let quick = str.slice(4, 9);
  let quick2 = str.substr(4, 5);

  p(quick);
  p(quick2);
}

main();

console.log("-------------------- replace ----------------");

let saying = "August is my favorite month";
let newSaying = saying.replace("August", "October");
let newSaying2 = saying.replace(/[Aa]ugust/, "October");
console.log(newSaying);
console.log(newSaying2);
console.log(saying);
saying = saying.replace("August", "October");
console.log(saying);
