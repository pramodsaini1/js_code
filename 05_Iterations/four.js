//only the key
const myObject={
    "c":'c',
    "c++":'c++',
    "Java":'java',
    "Ruby":'Ruby'
}
for(const key in myObject){
    // console.log(`key is ${key} and value id ${myObject[key]}`);
}

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 for (const key in map) {
     console.log(key);
 }