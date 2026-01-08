console.log("H");
console.log("I");
console.log("M");
console.log("A");
console.log("N");
console.log("S");
console.log("H");
console.log("U");
//you can't write it again and again

function sayMyName(){//declare (function) it's a keyword after {write function code that;s to be executed} 
console.log("H");
console.log("I");
console.log("M");
console.log("A");
console.log("N");
console.log("S");
console.log("H");
console.log("U");
}
 sayMyName()//callingbthe function 

 function addTwoNumbers(number1,number2){//when we use some words with function def are called parameters
    console.log(number1+number2);
 }

 addTwoNumbers(3,4)// when we used  some value on calling the functions are called arguments
 addTwoNumbers(3,"4")//34 js think both as a string
 addTwoNumbers(3,"a")//3a 

 const result = addTwoNumbers(3,5)

 console.log("Results: ", result);//undefined


//Another methods of function 


  function addTwoNumbers1(number1,number2){

    let result = number1+number2// result ko variable decide karo
    return result// return karawo
}

function addTwoNumbers2(number1,number2){

    return number1+number2 // result ko direct return karo
}





function loginUserMessage(username){
    return`${username} just logged in`
}

console.log(loginUserMessage("Himanshu"))
console.log(loginUserMessage())//if value is not given then undefined will be print