const provinces = new Map();

provinces.set("QC", "Quebec");
provinces.set("BC", "British Columbia");

console.log(provinces);
console.log(provinces.get("BC"));
console.log(provinces.has("QC"));

provinces.delete("BC");

console.log(provinces);
