
// functional programming is a programming paradigm writing clean and reliable code with pure function,focuses on immutability,no changing variable,avoid side effect and no messing with the outside world 

// Functional programming in JavaScript is a style of writing code where we build programs using pure functions, avoid changing data directly (no mutation), and treat functions as first-class citizens. This means we can store functions in variables, pass them as arguments, and return them from other functions. It helps make our code cleaner, easier to test, and less prone to bugs."

// pure function is a function that gives same output for the same input and has no side-effects
function sum(a,b){
    return a+b;
}
const res = sum(2,5);
console.log(res)

// immutability : no changing in original data
const arr = [2,3,4,5,6,7];
function double(arr) {
    return arr.map( val=> val * 2);
}
let arrdbl = double(arr);
console.log(arrdbl)
console.log(arr)

function pushItem(arr,item) {
    return [...arr ,item];
}
console.log(pushItem(arr,100))
console.log(arr);

function removeLastItem(arr){
    // return arr.slice(0 , arr.length-1);
    return arr.slice(0 , -1);
}
console.log(removeLastItem(arr))

// avoid shared state
// let i = 0;
// function increase(){
//     i++;
// }
// increase();
// console.log(i);

// avoid side effects 
// “A function has a side effect if it reads from or writes to anything outside its scope — like variables, the DOM, files, or network.”


// Reuse and Compose 
// Reuse means writing code once and using it in multiple places to avoid repetition.
// Compose means combining small functions together to build more powerful logic.

// generate email using compose function
const toLower = name => name.toLowerCase();
const setAddTheRate = name => name+"@";
const setCompanyMail = name => name+"yahoo.com";

function generateEmail(name){
    return setCompanyMail(setAddTheRate(toLower(name)))
}
const email1 = generateEmail("Munna")
console.log(email1)


// loose coupling
const person = {
    name : "Tripathi",
    email : "tripathi@gmail.com",
    age : 25
}
const getEmail = obj => obj.email; // still dependent
const getData = (obj , dataName) => obj[dataName]; // less dependent
console.log(getEmail(person));
console.log(getData(person , "name"));

// FirstClassFunction vs HighOrderFunction vs CallbackFunction
// firstclassfunction is a function that can be stored as a variable , where we can use later to call or pass


// callback / callback hell

function fun1(fun){
    console.log("fun1 run")
    fun()
}

function fun2(fun){
    console.log("fun2 run")
    fun()
}

function fun3(fun){
    console.log("fun3 run")
    fun()
}

fun1(()=> {
    fun2(()=> {
        fun3(()=>{
            fun1(()=> {
                fun3(()=>{})
            })
        })
    })
})
