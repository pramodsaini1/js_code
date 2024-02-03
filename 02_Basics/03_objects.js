//objects

const mySym=Symbol('key1')

const jsUser={
    name:"pramod",
    age:18,
    location:"udaipurwati",
    [mySym]:"key1",
    email:"pramod@gmail.com"
}

console.log(jsUser.email);

console.log(jsUser["email"]);

console.log(jsUser[mySym]);

jsUser.email="don@gmail.com"

console.log(jsUser);

jsUser.gretting=function(){
    console.log("js User");
}

console.log(jsUser.gretting());

jsUser.grettingD=function(){
    console.log(`Hello Js user,${this.name}`);
}

console.log(jsUser.grettingD());