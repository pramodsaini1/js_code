const userEmail=[]

if (userEmail) {
    console.log("got useremail");
}
else{
    console.log("Don't have useremail");
}
// falsy value

// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truithi values
// "0",'false',[],{},function(){}," "

// if (userEmail.length===0) {
//     console.log("Array is Empty");
// }
const emptyobj={}
if (Object.keys(emptyobj).length==0) {
    console.log("object is Empty");
}
//Nullish Coalescing operator (??) : null undefined
 let val1;
 //val1=5??10
 //val1=null ??10
 //console.log(val1);

 //var1=undefined ?? 15

 val1=null ??10 ??15
 console.log(val1);

 //Ternary operator

//condition?true : false
const iceTeaPrice=100
iceTeaPrice<=80 ?console.log("less than 80 ") : console.log("more than 80");



