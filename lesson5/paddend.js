let cc_num = "4560 1234 2345 3456";
let last4 = cc_num.slice(-4);
let padded = last4.padStart(cc_num.length, "*");

console.log(padded);
