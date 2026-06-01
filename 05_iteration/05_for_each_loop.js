/*
=================== for each loop =====================

👉 Used to go through every item in an array one by one.
👉 It runs a function for each element.
Think: “Do this work for every item in the list”

syntax

array.forEach(call back function) => {     // call back function has no any name
    
});
 
*/
 
const coding = ["js", "ruby" , "java" , "python" , "cpp"]

coding.forEach( function (val){
    console.log(val);
} )

  // now in arrow function
//           ⬇️
//   async (params) => { 
    
//   }

coding.forEach ((item) => {
    console.log(item);
  } )


function printMe(item){
  console.log(item);
}

coding.forEach(printMe)


coding.forEach( (item, index , arr) => {
   console.log(item, index , arr);
} )


const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "Python",
    languageFileName: "Py"
  },
]

myCoding.forEach((item) => {
  console.log(item.languageName);
} )
