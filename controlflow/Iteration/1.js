//for

for (let i = 0; i < 10; i++) {
    const element =i;
    if ( element==5) {
        //console.log("5 is the best number");
    }
   // console.log(element);
    
}

// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop value:${i}`);
//      for (let j = 1; j <=10; j++) {
//          //console.log(`Inner loop value:${j} and inner value:${i}`);
//         console.log(i+'*'+j+'='+i*j);
//      }
    
// }
const myArray=["flash","batman","superman"]

for (let index = 0; index <myArray.length; index++) {
    const element = myArray[index];
    console.log( element);
    
}

//break,continue
// for (let i = 1; i <=20; i++) {
//       if ( i==5) {
//          console.log(i);
//          break;
//       }
//       console.log(i);
    
// }
for (let i = 1; i <=20; i++) {
      if ( i==5) {
         console.log(i);
         continue;
      }
      console.log(i);
    
}