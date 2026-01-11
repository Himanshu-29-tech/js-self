//+++++++++++++++Javascript Execution content++++++++++++

// global execution content
// function execution content
// eval execution content

// two phases

// -> Memory creation phases
// -> execution phases


// let's see with a code example
let val1 = 10
let val2 = 5
function addNum (num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

//cycle1-------->>>>>>
// 1-> Global execution
//       this

// 2-> Memory phase

// let val1 = undefined
// let val2 = undefined
// function addNum (definition)
// let result1 = undefined
// let result2 = undefined



// cycle2------------>>>>>>>>
// val1 = 10
// val2 = 5
// add num = [new variable environment + execution thread] // after it's work it's will be deleted
//                       +
//                       +
//                       +
//                       +
//                       +
//                       +
//                       +
//                      ⬇️
//  Memory phase
// val1 --->  undefined
// val2 --->  undefined
// total  ---> undefined

// Execution content
// num1  ---> 10
// num2  ---> 5
// total ---> 15




//+++++++++++++++++CALL STACK +++++++++++++++
//The call stack is like a to-do list for your code.
//It keeps track of which function is running right now and what to do next.

// Imagine stacking books:
// You put a book on top → that’s like calling a function
// You remove the top book → that’s like finishing a function

//It works in LIFO order ---->>> last in first out

// let's see with example

function one(){
    console.log("One")
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}

one()
two()
three()

//  in call stack 
//first it's will be one
//  after it two
// after it three


function one(){
    console.log("One")
    two() // we calling two inside the one function
}
function two(){
    console.log("two")
    three() // we calling three inside the two function
}
function three(){
    console.log("three")
}

// now in call stack
// first it's will be one
// after it's two but also held one
//  after it's three but alkso held one and two


