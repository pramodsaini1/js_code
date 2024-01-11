class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
       return this._email.toUpperCase()
    }
    set email(value){
       this._email=value
    }
    get password(){
       return `${this._password}pramod`
    }
    set password(value){
      this._password=value 
    }
}
const pramod=new User("pk@gmail.com","abc")
console.log(pramod.password);
console.log(pramod.email);