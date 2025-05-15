
// Variables in JS - let,var and const
/*   
charateristics of let and const
    * have BLOCK SCOPE
    * must declared before use
    * does not bind to "this"
    * are not hoisted
    * Variables defined with let and const are also hoisted to the top of the block, but not initialized. Result in a ReferenceError: 



*/
let num = 22;
const name = "tendril"
{
    console.log(num);
    console.log(name);
}
{
    let num = 44;
    console.log(num);
    const villaName = "MountVilla";
    console.log(villaName);
}
num = 100;
// name = "cannot do this"
console.log(num);
console.log(name);

/* 
characteristic of var
    * is hoisted
    * does not have to declared before use
    * binds to "this" 

Hoisting in JS : Variables defined with var are hoisted to the top and can be initialized at any time.It means We can use the variable before it is declared

*/
text = "my var text"
console.log(text)
var text;

/* ***cannot do like this

boolean = false;
console.log(boolean);
let boolean;

*/