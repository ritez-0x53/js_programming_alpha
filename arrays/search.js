// Array Search

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
console.log(position);
position = fruits.lastIndexOf("Apple");
console.log(position);
console.log(fruits.includes("Mango"));


// JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.
const num = [2,3,4,5,12,45,33];
const first = num.find((val,ind,arr)=> {
    return val > 20
});
console.log(first);
// JavaScript Array findIndex()
const temp = [27, 28, 30, 40, 42, 35, 30];
const i = temp.findIndex(x => x > 28);
let high = temp.findLast(x => x > 40);
let pos = temp.findLastIndex(x => x > 40);
console.log(i , high , pos);

