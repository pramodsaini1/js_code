class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
         super(username)
            this.email=email
            this.password=password
    }

    addCourses(){
        console.log(`A new COurses was added by ${this.username}`);
    }
}
const chai=new Teacher("chai","chai@gmail.com","123")
 chai.addCourses()

 const masalaChai=new User("masalaCHai")
 masalaChai.logMe()
 chai.logMe()

 console.log(chai==Teacher);

 console.log( chai instanceof Teacher);

 console.log(chai instanceof User);