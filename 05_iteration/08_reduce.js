 // Reduce 


// accumulator → stores the result
// currentValue → current element in the array
// initialValue → starting value of accumulator

 const myNums = [1, 2, 3]

 const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
 }, 0)

 console.log(myTotal);



 // reduce in Arrow function

 const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 0)

 console.log(myTotal);


 
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 3999
  },
  {
    itemName: "web course",
    price: 999
  }
];

const PriceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(PriceTopay); 
