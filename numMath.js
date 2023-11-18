const score=400 

console.log(score);

const balence= new Number(score);
console.log(balence);
console.log(balence.toString().length);
console.log(balence.toFixed(2));

const otherName=23.9998

console.log(otherName.toPrecision(4));

const hundreds=10000000

console.log(hundreds.toLocaleString('en-IN'));

//--------------------------maths-------------------------------------

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.ceil(5.2));

console.log(Math.round(3.5));

console.log((Math.random()*10)+1);



const min=10

const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);