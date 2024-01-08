// let myName="pramod     "
// console.log(myName.truelength);

let myHeroes=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spdy power is:${this.spiderman}`);
    }
}
Array.prototype.heypramod=function(){
    console.log(`pramod says hello`);
}
Object.prototype.pramod=function(){
    console.log(`pramod is present in the all objects`);
}
//heroPower.pramod()
myHeroes.pramod()
//heroPower.heypramod()
myHeroes.heypramod()