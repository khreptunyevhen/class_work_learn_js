const {
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
  format,
} = require("date-fns");

const date = new Date("2020.01.01 22:30:00");

const d1 = addDays(date, 5);
const d2 = addMonths(date, 5);
const d3 = addYears(date, 5);
const d4 = addMinutes(date, 200);

const dates = [];
dates.push(d1, d2, d3, d4);

dates.forEach(printDate);

function printDate(d) {
  console.log(format(d, "yyyy-MM-dd HH:mm"));
}

// function test(num = 10) {
//   return num ** 2;
// }

// console.log(test());
