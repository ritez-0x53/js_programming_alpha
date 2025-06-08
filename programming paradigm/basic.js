// Programming Paradigm
// Way or Style of Programming

// 1.Imperative Programming: Writing step-by-step logic like loops,conditionals, and variable updates.

// procedural:
let num = -10;
console.log(num , "is" , checkNum(num));

function checkNum(num){
    if(num>=0) {
        return positive();
    } else {
        return negative();
    }
}
function positive(){
    return "positive";
}
function negative(){
    return "negative";
}

// structural :
let numIs = "";
function checkNumber(num) {
    if(num === 0 ){
        numIs = "zero"
    } else if (num > 0) {
        numIs = "positive"
    } else {
        numIs = "negative"
    }
    return numIs;
}
console.log(checkNumber(0))


//2. Declarative : Focuses on what to do, not how to do it. Seen in Array.map, JSX in React,etc.
// Functional Programming : Uses pure functions, avoids changing variables, and focuses on data transformation.

const sum = (a,b) => a + b;
const res = sum(9,10);
console.log(res);

// 3. OOPS

class Person {
    constructor(name,age){
        this.name = name;
        this.age = 45;
    }
    get getName(){
        console.log(this);
    }
}
Person.prototype.getAge = function(){
    console.log(this.age);
}

const p1 = new Person("rites" , 90);
p1.getName;
p1.getName;
p1.getAge()


// event driven
const btn = document.getElementById("btn");
let count = 0;
btn.addEventListener("click" , ()=> {
    count++;
    btn.innerHTML = `Count - ${count}`
})
/*
function useState(initialValue) {
    const state = { value: initialValue };

    const setState = (newValue) => {
        state.value = newValue;
    };

    return [state, setState];
}

// Usage
const [nameState, setName] = useState("ritez");
console.log(nameState);     // ritez
*/

