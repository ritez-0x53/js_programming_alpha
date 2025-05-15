/*** Object Constructor Functions
Sometimes we need to create many objects of the same type.
To create an object type we use an object constructor function.
It is considered good practice to name constructor functions with an upper-case first letter.
*/
// The value of "this" will become the new object when a new object is created.

function Person(first,last,age,eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye
}
const person1 = new Person("Riteswar","Swargiary",24,"blue");
console.log(person1);
const person2 = new Person("Jimmy","Malakar",21,"green");
// Adding a Property to an Object
Person.nationality = "Indian"
console.log(person2 , person2.nationality);
Person.prototype.nationality = "Indian"
console.log(person2 , person2.nationality);

// Adding a new method must be done to the constructor function prototype:
Person.prototype.fullName = function(){
    return this.firstName+" "+this.lastName
}

console.log(person2.fullName());

