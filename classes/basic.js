
class Car {
    constructor(name,model,color){
        this.name=name;
        this.model=model;
        this.color=color;
    }
    brief(){
        return `The car name is ${this.name}, model is ${this.model} and color is ${this.color}`
    }
}

class CarOwner extends Car {
    constructor(name,model,color,owner){
        super(name,model,color)
        this.owner = owner;
    }
    show() {
        return `${this.name} ${this.model} owner is Mr. ${this.owner}`
    }

    get carName(){
        return this.name;
    }

    set carName(x) {
        this.name = x;
    }
    // You cannot call a static method on an object, only on an object class.
    static fun(){
        return "This is static method in Class Object"
    }
}
const owner = new CarOwner("Kia","1200","black","Riteswar");
owner.carName = "Alto"
const name = owner.carName;
console.log(name);
console.log(owner.show());

// const res = owner.fun not work
const res = CarOwner.fun();
console.log(res);
