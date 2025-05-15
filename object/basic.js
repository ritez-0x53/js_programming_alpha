/*
Objects are containers for Properties and Methods.
Properties are named Values.
Methods are Functions stored as Properties.
Properties can be primitive values, functions, or even other objects.
*/

const car = {
    name : "Fiat",
    model : 500,
    weigth : "850kg",
    color : "white"
}
const person = new Object({firstName : "Ritez" , lastName: "Swar" , age: 25 , eyeColor:"blue"})

person.wife = "N/A"
person["lastName"] = "Narzi"
person.fullName = function(){
    return this.firstName+" "+this.lastName
}
const fullName = person.fullName();
console.log(person , car , fullName);
