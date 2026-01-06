//array
 
 const myArr = [0,1,2,3,4,5,true,"himanshu"]//collection of multiple items in single variable,mutable-you can change
 console.log(myArr[0])//first index start with 0


 const myHeroes = ["Shaktiman","Balveer"]
 console.log(myHeroes[1])

 //Arrays methods
myArr.push(6)// to add element at last
myArr.push(7)
myArr.pop()//it's remove the last value 
console.log(myArr);

myArr.unshift(9)// start the element at first
myArr.shift()//remove the element
console.log(myArr);

console.log(myArr.includes(9));//return boolean values
console.log(myArr.indexOf(7));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);// it's value will be string

// slice,splice
//slice = copy ✂️
//splice = change 


console.log("A",myArr);

const myn1 = myArr.slice(1,30)//Take out a piece (does NOT change original)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)//Take out a piece (does NOT change original)
console.log("C",myArr);
console.log(myn2);








