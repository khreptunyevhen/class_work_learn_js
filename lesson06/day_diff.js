const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const a = new Date(2023, 00, 01);
const b = new Date(2023, 02, 20);

// Discard the time and time-zone information.
const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
let diff = Math.floor((utc2 - utc1) / _MS_PER_DAY);

console.log(diff);

// Enother way
const date1 = new Date(2022, 01, 01);
const date2 = new Date(2023, 09, 06);

let mounth_diff = date1.getMonth() - date2.getMonth();
let year_diff = date1.getFullYear() - date2.getFullYear();

let result = mounth_diff + year_diff * 12;
console.log(result);
