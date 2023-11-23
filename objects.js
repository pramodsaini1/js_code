//singleton

//object literals

const mySym=Symbol("key1")


const jsUser={
    name:"pramod",
    age:18,
    localtion:"sikar",
    [mySym]:"key1",
    email:"pramod@gmail.com",
}

console.log(jsUser.email);

console.log(jsUser["email"]);

 console.log(jsUser[mySym]);

 jsUser.email="pk@gmail.com"

//i Object.freeze(jsUser)

 jsUser.email="dh@gmail.com"

 console.log(jsUser);


 jsUser.greeting=function(){

    console.log("Hello Js User");
 }

 console.log(jsUser.greeting );

 jsUser.greetingt=function(){

    console.log(`Hello Js User,${this.name}`);
 }

 console.log(jsUser.greeting());
 console.log(jsUser.greetingt());




