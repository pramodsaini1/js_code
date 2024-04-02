// for of loop
const arr=[1,2,3,4,5]
for(const num of arr){
   // console.log(num);
}

const greeting="Hello World"
for(const greet of greeting){
   // console.log(`every char is ${greet}`);
}

const map=new Map();
map.set("IN","INDIA");
map.set("AUS","AUSTRALIA");
map.set("PAK","PAKISTHAN");
//console.log(map);
for(const [key,value] of map){
    console.log(key+'-'+value);
}