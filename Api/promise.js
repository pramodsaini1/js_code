const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    // DB calls 

    setTimeout(function(){
       console.log('Async task is completed');
       resolve()
    },1000)
})
const promiseTwo= new Promise(function(resolve,reject){
    setTimeout(function(){
         console.log("Async task 2");
         resolve()
    },1000)
 })
 promiseTwo.then(function(){
    console.log("Async 2 resolved");
 })

 const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username:"chai",email:"chai@gmail.com"})
    },1000)
 })
 promiseThree.then(function(user){
   console.log(user);
 })
 const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
          let error=true
         if (!error) {
             resolve({username:"pramod",password:"123"})
         }
         else{
            reject('ERROR Something went to wrong')
         }
    },1000)
 })
  promiseFour.then((user)=>{
  console.log(user);
  return user.username
 }).then((username)=>{
     console.log(username);
 }).catch(function(error){
   console.log(error);
 }).finally(()=> console.log("Then promise is either resolved or rejected"))
  
 const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
       if (!error) {
           resolve({username:"Javascript",password:"123"})
       }
       else{
          reject('ERROR js Something went to wrong')
       }
  },1000)
 })
 promiseFive.then()
