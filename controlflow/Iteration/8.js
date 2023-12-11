const myNums=[1,2,3,4,5]

// const myTotal=myNums.reduce( function(acc,curval) {
//   console.log(`acc:${acc} and curval:${curval}`);
//     return acc+curval
// },0)

const myTotal=myNums.reduce( (acc,cur)=>acc+cur,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemName:"php course",
        price:2000
    },
    {
        itemName:"java course",
        price:5000
    }

]
const price=shoppingCart.reduce( (acc,item)=>acc+item.price,0)
console.log(price);
