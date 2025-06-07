
// Math is a built-in-object in JS 

// methods

console.log(Math.round(3.4)) // 3
console.log(Math.round(3.5)) // 4

console.log(Math.floor(3.8)); //3
console.log(Math.ceil(-3.8)); // -3
console.log(Math.ceil(3.8)); //4

console.log(Math.abs(-88)); //88
console.log(Math.abs(88));  //88

console.log(Math.sqrt(144)); // 12
console.log(Math.pow(9, 2)); // 81

const arr = [23,45,67,21,55,22,11,28,19,18,22,33,44,54]

console.log(Math.min(222,333,111)); // 111
console.log(Math.min(...arr)); // 11

console.log(Math.max(222,888)); // 888
console.log(Math.max(...arr))


// generate a random num between min and max value ?

const min = 5 , max = 10;
const randNum = Math.round( Math.random() * (max-min) + min  );
console.log(randNum);
