function  sayMyName(){
    console.log("P");
    
}

//sayMyName();

//function addTwoNumber(number1,number2){
  //   console.log(number1+number2);
//}

function addTwoNumber(number1,number2){
    //let result= number1+number2;
    //return result;
    return number1+number2;
}
const result = addTwoNumber(3,4);
//console.log("Result"+result);


function loginUserMessage(username="sam"){
  if(!username){
    // console.log("please enter the user name");
     return
  }
     return `${username} just logged in`
}

//console.log(loginUserMessage("pramod"));
//console.log(loginUserMessage("pramod"));

function calculateCarPrice(val,val2,...num1){
   return num1;
}
 console.log(calculateCarPrice(200,400,600,900) );//...--------rest operator


 const user={
     username:"pramod",
     prices:199
 }
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 //handleObject(user)

 handleObject({
    username:"sam",
    price:199
 })

 const myNewArray=[200,400,100,600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArray));