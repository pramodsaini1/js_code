function SetUsername(username){
    // complex DB Calls
    this.username=username
 }
function  createUser(username,email,password){
    SetUsername.call(this,username)
     this.email=email
     this.password=password
}

const chai=new createUser("chai","chai@gmail.com","123")
console.log(chai);