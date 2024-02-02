///Array

const myArr=[0,1,2,3,4,5,6,7,8,9]

console.log(myArr[0]);

//Array methods

myArr.push(29);
myArr.pop();
myArr.unshift()

console.log(myArr.includes(12));

console.log(myArr.indexOf(3));


const newArr=myArr.join()

console.log(myArr);
console.log(newArr);


// // slice,splice


console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);

console.log("B",myArr);

const myn2=myArr.splice(1,3)

console.log(myn2);

console.log("C",myArr);