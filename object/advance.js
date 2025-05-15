
const car = {
    name : "Kia",
    model : "200S",
    color : "Black",
    Intro : function() { return `car name is ${this.name},model no. ${this.model}, ${this.color} in color`}
}

console.log(car);
console.log(car.Intro());

const keys = Object.keys(car);
const vals = Object.values(car);
const entries = Object.entries(car)
console.log(keys , vals , entries);
const json = JSON.stringify(car);
console.log(json);

for(let key in car) {
    console.log(key);
}
console.log("==========================================")
for(let val of Object.values(car)) {
    console.log(val);
    
}


// JavaScript Object.assign()
