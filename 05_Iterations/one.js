//for loop
for(let i=0;i<10;i++){
    const element=i;
    if(i==5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

for(let i=0;i<10;i++){
    //console.log(`outer loop:${i}`);
    for(let j=0;j<10;j++){
        // console.log(`inner loop:${j}`);
        // console.log(i+"*"+j+'='+i*j);
    }
}
for(let index=0;index<20;index++){
    if(index==5){
        console.log('Detected 5');
        break;
    }
    console.log(`value of i is:${index}`);
}