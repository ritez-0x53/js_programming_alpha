
// callback function 
// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

function square (num) {
    return num ** 2;
}
function sum(a,b , callback) {
    let res = a+b;
    res = callback(res);
    return res;
}
console.log(sum(3,2 , square));

function add() {
    nums = [2,3,1,4]
    let res = nums.reduce((cur,val)=> cur + val,0);
    console.log("displayed after 2secs",res);
}
const timeout = setTimeout(add , 2000);
console.log(timeout);

// 

function fun1(cb){
    setTimeout(()=> {
        console.log("This is function 1");
        cb()
    } ,3000)
}
function fun2(cb){
    setTimeout(()=> {
        console.log("This is function 2");
        cb()
    },2000)
}
function fun3(cb){
    setTimeout(()=> {
        console.log("This is function 3");
        cb()
    },1000)
}
function fun4(){
    setTimeout(()=> {
        console.log("this is function 4");
    },2000)
}

fun1(()=> {
    fun2(()=> {
        fun3(()=> {
            fun4()
        })
    })
})
