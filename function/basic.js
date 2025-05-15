
// Function Declarations
function sum(a , b) {
    return a+b;
}
const res = sum(20,30);
console.log(res);

// Function Expressions
let fun = function(param){return `function expression using param ${param}`};
console.log(fun(200))

// The Function() Constructor
const myFun = new Function("a" , "b" , "c" , "return a+b+c");
console.log(myFun(1,2,3));

// Function Hoisting - Hoisting is a default behaviour of Javascript , moving declaration to the top of current scope ,this behaviour can be seen in both function and variable declaration , can be accessed before declared.

addFun(9,10);
function addFun(x,y) {let res = x+y; console.log(res)};
x = 12
var x;

// Self-Invoking Functions
(function printHello(){
    console.log("hello world!");
})()

//*** Functions Can Be Used as Values */ 
// Functions are Objects
// The arguments.length property returns the number of arguments received when the function was invoked:

function numOfArgs(a,b,c){
    return arguments.length;
}
console.log(numOfArgs(1,2,3));

// Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.
const remain = (a,b) => a%b;
console.log("remainder is",remain(14,5));

 