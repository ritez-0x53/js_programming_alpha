
const myFruits = ["Banana","Orange","Apple","Mango"];
console.log(myFruits);

// JavaScript Array toString()
let strFruits = myFruits.toString();
console.log(strFruits,myFruits);
// JavaScript Array join()
let joinFruits = myFruits.join(" ")
console.log(joinFruits);


// JavaScript Array at()
let fruit = myFruits.at(3);
console.log(fruit , myFruits[3] , myFruits.at(myFruits.length-1));

// JavaScript Array pop()
let arr = ["android" , "linux" , "windows"];
let res;
console.log(arr);

res = arr.pop();
console.log(arr , res);
res = arr.push("Mac OS")
console.log(arr , res);
res = arr.shift()
console.log(arr , res);
res = arr.unshift("Symbian")
console.log(arr , res);

// JavaScript Array delete()
// Using delete() leaves undefined holes in the array.
console.log(arr);
delete arr[1];
console.log(arr);

// Merging Arrays (Concatenating)
let arr1 = ["dog" , "cat"];
let arr2 = ["cow" , "goat"];
let arr3 = ["snake" , "lion"]
let mergeArr = arr1.concat(arr2,arr3,"horse");
console.log(mergeArr);

// Array copyWithin()
let langs = ["eng" , "hin" , "beng" , "esp" , "tami" , "telu"];
langs.copyWithin(0,4,6 );
console.log(langs);

// JavaScript Array flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr , myArr);
// JavaScript Array flatMap()
const newArr2 = newArr.flatMap((x)=> [x*10]);
console.log(newArr2);

// JavaScript Array splice()
const movies = ["Tenet","Social Network","Slicon Valley","Journey to the west"];
const spMov = movies.splice(1,2,"Steve Jobs");
console.log(spMov , movies);

// JavaScript Array toSpliced() ********* IMP!
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(months , spliced);

// JavaScript Array slice()
// The slice() method does not remove any elements from the source array.
let slicedMonth = months.slice(2);
console.log(slicedMonth);

