
let numOne = 23;
let numTwo = 44;
// Arithmetic Operators
console.log(numOne+numTwo); //addition
console.log(numOne-numTwo); //subtraction
console.log(numOne*numTwo); //multiplication
console.log(numOne**2); //Exponentiation (ES2016)
console.log(numOne/2); //division
console.log(numOne%2); //Modulus (Division Remainder)
numOne++
console.log(numOne++);
numTwo--
console.log(numTwo);

// Comparison Operators
let num = 23 ;
console.log(num == "23");     // equal to 
console.log(num === "23");    //stricty equal to
console.log(num !== "23");    //strictly not equal to
console.log(num > 5);         //greater than
console.log(num >=23);          //greater than or equal to
console.log(num < 1);           //less than 
console.log(num <= 23);         //less than or equal to

// Logical Operator 
console.log(1>2 && 2>1); //false
console.log(1>2 && 1>2); //false
console.log(2>1 && 1<2); //true

console.log(2>1 || 1>2); //true
console.log(2<1 || 1>2); //false
console.log(2>1 || 1<2); //true

console.log(!true); //false
console.log(!false); //true 

// Conditional (Ternary) Operator
let age = 19
let voteable = (age < 18) ? "too young" : "Old enough";
console.log(voteable);

// The Nullish Coalescing Operator (??)
let name = null;
let text = "missing";
let result = name ?? text;
console.log(result);

// The Optional Chaining Operator (?.)
let car = {
    name : "Volvo",
    model : "23A",
    color : "black"
}
const res = car?.age
console.log(res , car?.name)