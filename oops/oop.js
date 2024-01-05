// const user={
//     Username:"pramod",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//        // console.log("Got user details from dataBse");
//        //console.log(`username:${this.username}`);
//        console.log(this);
//     }
// }
// //console.log(user.username);
// // console.log(user.getUserDetails());
// // console.log(this);


function user(username,loginCount,isLoggedIn){
     this.username=username
     this.loginCount=loginCount
     this.isLoggedIn=isLoggedIn

      this.greeting=function(){
          console.log(`Welcome ${this.username}`);
      }
      return this
}
const userOne=user("pramod",12,true)
const userTwo=user("pramod",12,true)

console.log(userOne.constructor);
//console.log(userTwo);


