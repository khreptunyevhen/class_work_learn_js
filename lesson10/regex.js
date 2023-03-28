const phone_regext = /(\d{3})-(\d{3}-\d{4})$/;

// const cat_regex = /[Cc][Ac][Tt]/;
const cat_regex = /cat/i; // i - lower and upper case

let is_validate = phone_regext.test("555-123-1234");
let phone_parts = phone_regext.exec("555-123-1234");
let phone_array = "555-123-1234".match(phone_regext);

console.log(is_validate);
console.log(phone_parts);
console.log(phone_array);
