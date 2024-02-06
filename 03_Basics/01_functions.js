//functions

function sayMyName(){
    // console.log("P");
    // console.log("R");
    // console.log("A");
    // console.log("M");
    // console.log("O");
    // console.log("D");
}
sayMyName()

function addTwoNumber(number1,number2){
    //   console.log(number1+number2);
}

function addTwoNumber(num1,num2){
    let result=num1+num2;
    return result;
}

//  console.log(addTwoNumber(5,10));

function loginUserMessage(username="sam"){
     if(!username){
        console.log("Please Enter the User name");
     }
     return `${username} just logged in`
}
// console.log(loginUserMessage("pramod"));

function calculateCarPrice(val,val2,...num1){
     return num1;
}
console.log(calculateCarPrice(200,400,600,900));//... rest operator 

const user={
    username:"pramod",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
      return getArray[1];
}
console.log(returnSecondValue(myNewArray));




