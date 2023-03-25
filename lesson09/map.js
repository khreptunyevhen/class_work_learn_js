const t = {
  key1: "user",
  key2: "guest",
  key3: "admin",
};

console.log(t["key2"]);

const arr = new Map([
  ["key1", "user"],
  ["key2", "guest"],
  ["key3", "admin"],
]);

let res = arr.get("key2");
console.log(res);
arr.set("key4", "men");

console.log(arr);

function display(val, key) {
  console.log(`My map has value: ${val} and key: ${key}`);
}

arr.forEach(display);
