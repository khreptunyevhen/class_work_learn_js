let age = 20;

if (age > 17) {
  console.log("Can vote");
} else {
  console.log("Cannot vote");
}

// Condition ? 'true' : 'false'
age > 18 ? console.log("Can vote") : console.log("Cannot vote");

console.log(false || (true && false));
console.log(false !== !true);
console.log(false && 1 + 2);

let can_vote = age > 18 ? true : false;
// works
// don't use thar because it is equil can_vote = age > 18. we should use ternary when we want to receive a value, not bool
