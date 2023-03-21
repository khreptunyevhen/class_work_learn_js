let a = "Brendan";
let found = a.charAt(3);
let found2 = a[3];
console.log(found);
console.log(found2);
let found4 = a.charAt(15);
let found5 = a[15];
console.log(found4);
console.log(found5);

console.log(a.indexOf("xyz"));
console.log(a.indexOf("ren"));
console.log(a.startsWith("Br"));

let search_result = a.indexOf("xyz");
if (search_result >= 0) {
  console.log("Found.");
} else {
  console.log("Not found.");
}
