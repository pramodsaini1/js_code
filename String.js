const name="pramod"
const repocount=50

console.log(name+repocount);



console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const gameName=new String('pramodsaini')

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-8,4);

console.log(anotherString);


const newStringOne="      pramod          "

console.log(newStringOne);

console.log(newStringOne.trim());


const url="https://pramod.com/pramod%20saini"

console.log(url.replace('%20','-'));


console.log(url.includes('pramod'));


console.log(url.split('-'));

