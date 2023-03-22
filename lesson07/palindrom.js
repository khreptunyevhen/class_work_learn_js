let p = "TREE";
let p2 = "1221";
let p3 = "MADAM";

function is_palidrome(words) {
  words = words.toLowerCase();

  let reverse = words.split("").reverse().join("");

  if (reverse === words) {
    console.log(true);
  } else {
    console.log(false);
  }
}

is_palidrome(p);
is_palidrome(p2);
is_palidrome(p3);
