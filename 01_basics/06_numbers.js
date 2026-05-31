const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);//pahle string me convert hua phir string ki property use kr lo
console.log(balance.toFixed(2));  // toFixed() — Decimal places fix karo


const otherNumber = 23.4534  
console.log(otherNumber.toPrecision(3));  //range(1-21) and return string 
// sirf 3 digits rakhni hain — 23.4534 → 23.5
// output will be 23.5

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // // "10,00,000"
// toLocaleString() — Indian Format
// commos acording to indian values
// Indian system — 10 lakh!

//=============================== Maths =======================================

console.log(Math);
console.log(Math.abs(-4));      // 4   — negative → positive
console.log(Math.round(4.6));   // 5   — nearest integer ⚠️
console.log(Math.ceil(4.2));    // 5   — hamesha upar
console.log(Math.floor(4.9));   // 4   — hamesha neeche
console.log(Math.min(4,3,6,8)); // 3 — sabse chhota
console.log(Math.max(4,3,6,8)); // 8 — sabse bada



console.log(Math.random());//0-1 ke bich me hi ayegi value
//  // 0.0 to 0.999...
console.log((Math.random() * 10) + 1) // 1.0 to 10.999...


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)

/*


step by step 💁
max - min + 1        // 20 - 10 + 1 = 11
Math.random() * 11   // 0.0 to 10.999...
Math.floor(...)      // 0 to 10
+ min                // 10 to 20 ✅

*/


