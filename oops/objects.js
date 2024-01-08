function multiple5(num){
    return num+5;
}
multiple5.power=2

console.log(multiple5);
console.log(multiple5.power);
console.log(multiple5.prototype);

function createUser(username,score){
   this. username=username
   this.score=score
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`prize is ${this.score}`);
}
const chai=new createUser("chai",25)
const tea=createUser("tea",258)

chai.printMe()