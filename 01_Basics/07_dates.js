let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreateDate = new Date(2023,0,30)
console.log(myCreateDate.toDateString());

let myCreateDate1=new Date("01-14-2024")
console.log(myCreateDate1.toLocaleDateString());


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
