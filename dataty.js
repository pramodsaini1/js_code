// primitive

// 7 Types-----String,Number,Boolean,null,undefined,Symbol,BigInt


//Reference(Non-Primitive)

//Array,Object,Functions

const score=100
const scoreValue=100.3

const isLoggedIn=false//return type------boolean
const outsideTemp=null//return type-------object

const id=Symbol('123')

const anotherId=Symbol('123')

console.log(id==anotherId);

const BigNumber=32434543538n//return type-----number

const heros=["shaktiman","naagra","doga"];
//return type-------object
let myobj={
    name:"pramod",
    age:22,
}//return type-----object

const myFunction=function(){
    console.log("Hello World");
}//return type----function





//memory------------stack(primitive)       and heap(non-primitive)

let name="pramo";
let anotherName= name

anotherName="prmaod saini"
 

console.log(anotherName);
console.log(name);


let userOne={
        email:"user@gmail.com",
        upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="pramod@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





