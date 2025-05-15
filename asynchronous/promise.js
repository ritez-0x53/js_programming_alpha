/*
const p1 = new Promise((res,rej)=> {
    if (true) {
        res("Yes this is great")
    } else {
        rej("Error Occured")
    }
})
p1.then((res)=> {
    console.log(res);
    
}).catch((err)=> {
    console.log(err);  
})
// console.log(Promise.prototype)
*/
// chaining Promises
const p1 = new Promise((res,rej)=> {
    setTimeout(()=> {
        res("hello1")
    },4000)
})

const p2 = new Promise((res,rej)=> {
    setTimeout(()=> {
        rej("rejected")
    },3000)
})
const p3 = new Promise((res,rej)=> {
    setTimeout(()=> {
        res("hello3")
    },2000)
})

Promise.all([p1,p3,p2]).then((res)=>{
    console.log(res);
}).catch((err)=> {
    console.log(err);
})

Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})

// console.log(Promise.prototype.catch)

function order(item){
    return new Promise((res,rej)=> {
        setTimeout(()=> {
            if(item) {
                res("order successfully - ",item)
            }else {
                rej("no item ordered")
            }
        },1000)
    })
}

function preparingOrder(item) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(item) {
                res("preparing hot - ",item);
            } else {
                rej("no preparation")
            }
        },3000)
    })
}

function orderSent(item){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(item) {
                res("Item sent through the delivery guy - ",item)
            } else{
                rej("nothing !")
            }
        },1000)
    })
}

order("pizza").then((res)=>{
    console.log(res);
    return preparingOrder("pizza")
}).then(res=>{
    console.log(res);
    return orderSent("pizza")
}).then(res=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})