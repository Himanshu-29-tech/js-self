const coding = ["js", "rubby", "java", "python", "cpp"]

const values = coding.forEach( (item) => { // storing dorEach value in const
    console.log(item); 
})

console.log(values);

// it's print the values but don't retrun anything


//+++++++++++FILTER++++++++++

const myNums = [1,2,3,4,5,6,7,8,9,10]
// filter take arrow function 
const newNums = myNums.filter( (num) => num > 4 ) //inside the filter there's a call back function -->> call back function acess every value -->> condition
console.log(newNums);
// if you used {} means you started scope then you must write return to return the value
// if you used() to acess without write return
 

const mynums1 = [1,2,,3,4,5,6,7]
const newnum1 = mynums1.filter( (num) => {
    return num > 4
})

console.log(newnum1);


//+++++++used of for each++++++++


const newNums1 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums1.push(num)
        
    }

} )

console.log(newNums1);


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
];

const userBooks = books.filter( (bk) => bk.genre === 'history' )

console.log(userBooks);
const userBooks1= books.filter( (bk) => { return bk.publish >= 2000} )
console.log(userBooks1);