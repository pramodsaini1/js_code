// 2 type of data-------primitive  and non-primitive
// --------primitive 
//  7 types
// String,number,null,undefined,symbol,boolean,BigInt

//reference or non-primitive data -type
//Array ,object ,functions


const score=100
const scoreValue=100.3

const isLoggedIn=false   // return type---------boolean
const outsideTemp=null  // return type---------object


const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);//false----can't compare the object in the javascript

const BigInt=2333453434n //return type-------Number

const heros =["pk","don","sir"]  //return type------object


let myobj={
    name:"pramod",//obejct;;;;;Property name: value
    age:22
}///return type--------object

const myFunction=function(){
    console.log("Hello World");
}//return type--------function