
// using ISO format - recommended format.
let customDate = new Date("2025-06-06T17:00:00");
console.log(customDate)
console.log(customDate.toLocaleString())
console.log(customDate.toUTCString())
console.log(customDate.toISOString())

// using timestamp 
let date = new Date(1749209607270);
console.log(date.toLocaleTimeString())
console.log(date.toTimeString())

// current date and time without arg.
const currentDate = new Date();
console.log(currentDate.toDateString())
console.log(currentDate.toLocaleDateString())
console.log(currentDate.toTimeString())

// getting parts of the date
console.log(currentDate.getDate())
console.log(currentDate.getDay())
console.log(currentDate.getMonth())
console.log(currentDate.getFullYear())
console.log(currentDate.getUTCFullYear())
console.log(currentDate.getHours())
console.log(currentDate.getTime()) // in milliseconds from starting epoch time

// setting parts of the date
currentDate.setFullYear("2021")
console.log(currentDate)
currentDate.setMonth(0) //(jan), 0-11 , jan-dec
currentDate.setDate(1);
console.log(currentDate)

// custom format of own 
const nowDate = new Date();
console.log(`${nowDate.getDate()}-${nowDate.getMonth() + 1}-${nowDate.getFullYear()}`)


// working with timestamp - number of milliseconds since the unix epoch.
let d = new Date("2025-01-01T00:00:00");
console.log(d.toLocaleString());
let timestamp = d.getTime();
// 24 hours ahead calculate.
let newTimeStamp = timestamp + (1000*60*60*24);

console.log(new Date(newTimeStamp).toLocaleString())

// calculating difference bet two time stamps 
const diffTS = newTimeStamp - timestamp;
console.log(diffTS/(1000*60*60) ) //in hours (24)
