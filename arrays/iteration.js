
// Array Iteration Methods
const arr = [34,56,33,22,19];

let res;
// JavaScript Array forEach()
arr.forEach((val,ind,arr)=> {
    res = val + 10;
    console.log(res)
})
console.log(arr);

// JavaScript Array map()
// The map() method does not change the original array.
const mapArr = arr.map(val=> res = val*2);
console.log(mapArr , arr);
// JavaScript Array flatMap()
const flatMapArr = arr.flatMap((val) => [val , val**2]);
console.log(flatMapArr);

// JavaScript Array filter()
const filteredArr = arr.filter(x=> x > 30);
console.log(filteredArr);

// JavaScript Array reduce()
const reducedArr = arr.reduce((total,val,ind)=> {
    return total + val;
},0)
console.log(reducedArr);

// JavaScript Array every()
// The every() method checks if all array values pass a test.
res = arr.every((val,ind)=> {
    return val > 23;
})
console.log(res);

// JavaScript Array some()
res = arr.some(val => val > 23);
console.log(res);

// JavaScript Array.from()
res = Array.from("123");
console.log(res);

// JavaScript Array keys()
const keys = arr.keys();
console.log(keys);
console.log(arr.entries());

// JavaScript Array with() Method
// ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);

// JavaScript Array Spread (...)
// The ... operator expands an iterable (like an array) into more elements:
const arr1 = [1,3,4]
const arr2 = [5,6]
const sprArr = [...arr1 , ...arr2];
console.log(sprArr);
arr1.push(5);
arr2.push(6);
console.log(arr1 , arr2 , sprArr);
