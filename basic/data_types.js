
// JavaScript has 8 Datatypes
/**
 * String
 * Number
 * Bigint
 * Boolean
 * Undefined
 * Null
 * Symbol
 * Object
        JavaScript has dynamic types : same variable can be used to hold different data types
**/

    let str = "this is text";
    let num = 45;
    let bool = false;
    let bigInt = BigInt("12345678901245678901234567890");
    let nothing = null;
    let undef;
    let sym = Symbol("%");
    let obj = {
        name : "rites",
        target : "development" ,
        code_num : 6009
    }
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof bigInt);
console.log(typeof undef);
console.log(typeof sym);
console.log(typeof obj);
