const { format } = require("date-fns");

const today = format(new Date(), "dd.MM.yyyy");

console.log(today);
console.log(format(new Date(), "yyyy-MM-dd"));
console.log(`Today's date: ${format(new Date(), "MMMM.do.")}`);
