
function promiseOne(item) {
    return new Promise(res=>{
        setTimeout(()=>{
            res(item);
        },3000)
    })
}

function promiseTwo(data){
    return new Promise(res =>{
        setTimeout(()=>{
            res(data)
        },2000)
    })
}

function promisethree(data){
    return new Promise(res =>{
        setTimeout(()=>{
            res(data);
        },1000)
    })
}
/*
promiseOne("first response").then((res) => {
    console.log(res);
    return promiseTwo("second response")
}).then(res => {
    console.log(res);
    return promisethree("third response")
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
*/
async function run(){
    let res = await promiseOne("first response");
        console.log(res ,"1")
        res = await promisethree("third response");
        console.log(res,"3");
        res = await promiseTwo("second response");
            console.log(res ,"2")
}

run();