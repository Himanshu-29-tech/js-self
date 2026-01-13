const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10 ) //map is callbackfunction ---> it's return the value
console.log(newNums);


const myNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = myNumbers1.map( (num) => { return num + 10 }) //---> it's return the value if you choose scope then write return
console.log(newNums1);


//++++++CHAINING FUNCTION+++++++

const newNums2 = myNumbers
                .map((num) => num * 10 )
                .map((num) => num + 1 ) // this num value is value of upper function result
                .filter( (num) => num >= 40)

console.log(newNums2);
        