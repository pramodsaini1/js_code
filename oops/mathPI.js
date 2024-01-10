const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);
const chai={
    name:'gign chai',
    prize:250,
    isAvailable:true,
    orderChai:function(){
       console.log("chai nhi bani");
    }
}
 

Object.defineProperty(chai,'name',{
   // writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of  Object.entries(chai)) {
      if(typeof value!=='function'){
        console.log(`${key}:${value}`);
      }
}
