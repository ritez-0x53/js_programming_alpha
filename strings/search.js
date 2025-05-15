
// JavaScript String Search

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
let text = "Please locate where 'locate' occurs!";
console.log(text.indexOf("locate"));
console.log(text.lastIndexOf("locate"));

console.log(text.search("locate"));

// JavaScript String match()
console.log(text.match("ate"));
console.log(text.matchAll("ate"));

// JavaScript String includes()
console.log(text.includes("ate"));

// JavaScript String startsWith()
console.log(text.startsWith("Please"));
console.log(text.startsWith("locate"));

// JavaScript String endsWith()
console.log(text.endsWith("occurs!"));
console.log(text.endsWith("occurs"));


