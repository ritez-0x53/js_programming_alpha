
// literal methods 
const int = 789;
const float = 45.777;
// constructor methods
const numObj = new Number(120);

// Number properties
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.EPSILON)
console.log(Number.NaN)

// Methods.
let num = "98.88 px";

console.log(Number.parseFloat(num)); // 98.88
console.log(Number.parseInt(num)); // 98

console.log(isNaN (Number.parseFloat(num))); //false
console.log(isNaN(num)) //true

console.log(isFinite(parseInt(num))) //true
console.log(isFinite(Infinity)) // false

// Instance methods
num = 44.4444;
console.log(num.toFixed(2)); // 44.44

console.log(num.toString()); // "44.4444"

console.log(num.toExponential(2)) // 4.44e+1

console.log(numObj.valueOf()) // 120

console.log(num.toPrecision(4)) // 44.44