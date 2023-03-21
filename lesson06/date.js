let dl = new Date();
let ms1 = dl.getTime();
console.log(dl);
console.log(ms1);

let d2 = new Date(1679352838265);
console.log(d2);

let d3 = new Date(2023, 02, 20);
console.log(d3);

let start_date = new Date(2023, 00, 01);
let end_date = new Date(2023, 02, 20);
let dt_diff = Math.abs(end_date - start_date);
let diff_days = Math.ceil(dt_diff / (1000 * 60 * 60 * 24));

console.log(diff_days);

// parse
console.log("-------------------------- parse -------------------------");

let d = new Date();

let ms = Date.parse(d);
let ms2 = d.getTime();
console.log(ms);
console.log(ms2);
