//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //name iife
    console.log(`DB CONNECTED`);
})
();
( (name)=>{
    console.log(`DB CONNECTED TWO ${name} `);
})('pramod')