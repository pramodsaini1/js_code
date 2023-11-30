// const user={
//     username:"prmaod",
//     price:99,
//     welcomeMessgae:function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessgae()
// user.username="sam"
// user.welcomeMessgae()

// console.log(this);//this is refer the empty object

// function chai(){
//     let username="pramod"
//    // console.log(this.username);
// }
// chai()

// const chai =()=>{
//     let username="pramod"
//     console.log(this);
// }
// chai()

// const addTwo=(num1,num2)=>num1+num2;
// const addTwo=(num1,num2)=>(num1+num2)//implicit arrow function have no return 
const addTwo=(num1,num2)=> ({username:"pramod"})

console.log(addTwo(3,4));

// const myArray=[2,3,4,5]

// myArray.forEach()

