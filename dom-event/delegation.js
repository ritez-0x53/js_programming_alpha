
const container = document.getElementById("container");

// const boxes = Array.from(container.children);
// boxes.map((elem)=> {
//     elem.addEventListener("click" ,(e)=> {
//         console.log(elem.textContent)
//     })
// }) 

container.addEventListener("click" , (e)=> {
    if(e.target.className === "box"){
        console.log(e.target.textContent);
    }
})