class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username :${this.username}`);
    }

   static createId(){
        return `123`
    }
}
const preamod=new User("pramod")
 //console.log(preamod.createId());

 class Teacher extends User{
       constructor(username,email){
        super(username)
        this.email=email
       }

 }
 const iphone=new Teacher("pk","pk@gmail.com")
 console.log(iphone.createId());