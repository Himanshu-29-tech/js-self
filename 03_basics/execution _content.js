/*+++++++++++++++Javascript Execution content++++++++++++

JavaScript mein 3 tarah ke Execution Context hote hain:
1. Global Execution Context  — sabse pehle banta hai
2. Function Execution Context— har function call pe banta hai
3. Eval Execution Context    — eval() pe banta hai (rare)


two phases

-> Memory creation phases
-> execution phases

*/
// let's see with a code example
let val1 = 10
let val2 = 5
function addNum (num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
/*
cycle1-------->>>>>>
pahle scan karta hai
================================================
 MEMORY PHASE — Sab undefined se start hota!
================================================
 val1    → undefined
 val2    → undefined
 addNum  → function definition store hoti hai
 result1 → undefined
 result2 → undefined
================================================


 cycle2------------>>>>>>>>
execution line by line 
================================================
EXECUTION PHASE — Actual values aati hain
================================================
val1    → 10
val2    → 5
addNum  → call hota hai — NAYA context banta hai!
result1 → 15
result2 → 12
================================================

jab addNum(val1, val2) call hota hai
ek NAYA execution context banta hai andar!

================================================
 FUNCTION EXECUTION CONTEXT — addNum(10,5)
================================================
 Memory Phase:
 num1  → undefined
 num2  → undefined
 total → undefined

 Execution Phase:
 num1  → 10
 num2  → 5
 total → 15
 return → 15 — context DELETE ho jaata hai! 🗑️
================================================


//+++++++++++++++++CALL STACK +++++++++++++++
//The call stack is like a to-do list for your code.
//It keeps track of which function is running right now and what to do next.

// Imagine stacking books:
// You put a book on top → that’s like calling a function
// You remove the top book → that’s like finishing a function

//It works in LIFO order ---->>> last in first out
*/
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


