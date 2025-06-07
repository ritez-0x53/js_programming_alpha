
const grandParent = document.getElementById("grand_parent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

// ***Event Propagation in DOM 
// consist of three phases : capturing phase,target phase and bubbling phase

// bubbling phase : event travel from target element upwards the top most root element
// capturing phase : event travel from top most root element downwards the target element
// at default : bubbling phase , in order to achive capturing phase we have to add third parameters "true" in event listener function



grandParent.addEventListener("click" ,(e)=> {
    console.log("Grand Parent");
    console.log(e.target)
    console.log(e.currentTarget)
},true)

parent.addEventListener("click" ,(e)=> {
    // e.stopImmediatePropagation()
    e.stopPropagation()
    console.log("PARENT")
    console.log(e.target)
    console.log(e.currentTarget)
    
},true)

parent.addEventListener("click" , (e)=> {
    console.log("again Parent")
},true)

child.addEventListener("click" ,(e)=> {
    console.log("CHILD");
    console.log(e.target)
    console.log(e.currentTarget)
},true)


