
for (let i = 0 ; i < 5 ; i++) {
    console.log(i);
}
// for ( ; ;){
//     // console.log("i");
//     // runs infinite loops
// }

let i = 0;
while(i < 3) {
    console.log(i);
    i++;
}
i = 5;
do {
    console.log("running" , i);
    i--;
} while (i > 3)


    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        console.log("number is ",i);
      }
    
      for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        console.log("skip at 3" , i);
        
      }