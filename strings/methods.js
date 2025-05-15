
let str = "Android is better than IOS"

console.log(str.length); // length of the string
console.log(str.charCodeAt(11)); // character code
console.log(str.charAt(11));
console.log(str.at(11));
console.log(str[11]);

// Extracting String Parts
let text = "android, ios, symbian, linux"
console.log(text.slice(9,12));
console.log(text.substring(0 , 7))
console.log(text.substr(7 , 7)); 

// Converting to Upper and Lower Case
let res = text.toUpperCase();
console.log(res);
console.log(text.toLowerCase());

// JavaScript String concat()
let txt1 = "Hello";
let txt2 = "World";
console.log(txt1.concat(" " , txt2));

// JavaScript String trim()
let txt = "              HI, JAVASCRIPT !            ";
console.log(txt);
console.log(txt.trim());
console.log(txt.trimStart());

// JavaScript String Padding
let txt_1 = "45";
console.log(txt_1.padStart(5,"1")); //11145
console.log(txt_1.padEnd(3,1)) // 451

// JavaScript String repeat()
let hello = "Hello Man!";
console.log(hello.repeat(4));

// Replacing String Content
let string = "Android has best performance , Android has higher user than IOS"
console.log(string.replace("Android" , "Linux"));
console.log(string.replaceAll("Android" , "Linux"));

// Converting a String to an Array
let myStr = "android,windows,macos,linux"
let newStr = myStr.split(",")
console.log(newStr);




