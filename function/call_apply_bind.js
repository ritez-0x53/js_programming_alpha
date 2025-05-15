
function fullName(region) {
    return `${this.firstName} ${this.lastName} is from ${region}`
}
let person1 = {
    firstName : "Amir",
    lastName : "khan"
}
const res1 = fullName.call(person1 , "India");
const res2 = fullName.bind(person1, "yyy")
const res3 = fullName.apply(person1 ,["Israel"])
console.log(res1 , res2() , res3);

