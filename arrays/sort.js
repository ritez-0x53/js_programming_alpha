
// Array Sort Methods

// The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

// Reversing an Array
fruits.reverse();
console.log(fruits);

// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.
let months = ["Jan" , "Feb" , "Mar" ,"Apr" ,"May"];
let sortedMonths = months.toSorted();
console.log( months,sortedMonths);

// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.
let reversedMonths = months.toReversed();
console.log(reversedMonths);

// Numeric Sort
const num = [1,2,5,4,23,3,0,11]
num.sort(); // sorted alphabetically
console.log(num);
num.sort((x,y)=>x-y);
console.log(num);
