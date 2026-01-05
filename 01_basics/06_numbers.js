const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);//pahle string me convert hua phir string ki property use kr lo
console.log(balance.toFixed(2));

const otherNumber = 23.4534

console.log(otherNumber.toPrecision(3));//range(1-21) and return string // output will be 23.5

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// commos acording to indian values

// +++++++++++++++++Maths++++++++++

console.log(Math);
console.log(Math.abs(-4));//absolute value
console.log(Math.round(4,6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());//0-1 ke bich me hi ayegi value
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)






