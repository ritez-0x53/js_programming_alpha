
// Conditional Statements in JS - if, else
let res = false;
if (res === true) {
    console.log("this is true");
} else {
    console.log("this is false");
}

// if , else if, else
let num = 50;
let result;
if (num === 50) {
    result = `number is equal to 50`
} else if (num > 50) {
    result = "number is greater than 50"
} else {
    result = "number is less than 50"
}
console.log(result);

// switch statements 
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Satarday";
}

console.log("Today, the day is ",day);
