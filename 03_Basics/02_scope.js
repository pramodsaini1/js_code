let a=300
if(true){
     let a=10
     const b=20
     console.log(a);
}
console.log(a);
// console.log(b);--error

function one(){
    const username="pramod"

    function two(){
          const website="youtube"
          console.log(username);
    }
    // console.log(website);---error
    two()
}
one()


addone(5)

function addone(num1){
    return num1+1;
}

addTwo(10)

function addTwo(num){
    return num+1;
}