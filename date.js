//date

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreateDate = new Date(2023,0,23)

console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date("01-14-2023")

console.log(myCreateDate1.toLocaleString());

let myTimesStamp= Date.now()

console.log(myTimesStamp);

console.log(myCreateDate1.getTime());

console.log( Math.floor(Date.now()/1000));


let newDate=new Date();

console.log(newDate);

console.log(newDate.getMonth()+1);

console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));


