//Immediately Invoked Function Expression(iife)
// normal function --->> pahle declare , phir call
function chai(){// named iife
    console.log('DB CONNECTED');
}
chai(); // alag se call karna padta hai

// IIFE - declare aur call ek sath

(function chai1(){
    console.log('DB CONNECTED');
})(); // yanha hi call ho gya 

/// let's used by arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Himanshu')

/* why we used iife ??
global pollution problem


*/

let dbConnection =  "connected" //global
let username = "Himanshu"
// Puira program in variable ko acess kr sakta hai 
// dusre code se conflict ho sakta hai

(function(){
    let dbConnection = "connected" // local
    let username = "Himanshu" // local
    // bahar koibacess nhi kr skata
})()


//===================== 3 types of iife ===============

(function chai(){
    console.log('DB CONNECTED')
})() 


(function(){
    console.log("DB CONNECTED")
})()

(() => {
    console.log('DB CONNECTED')
})()


//=======================================================
//           IIFE QUICK REFERENCE
//=======================================================
//  Syntax:
//  (function(){ ... })();         — Named/Anonymous
//  (() => { ... })();             — Arrow
//  ((param) => { ... })('value'); — With Arguments
//=======================================================
//  Kyun use karte hain?
//  ✅ Global pollution se bachao
//  ✅ Variables andar hi rahte hain
//  ✅ Declare aur Execute ek saath
//  ✅ DB connections ke liye best
//=======================================================
//  ⚠️  YAAD RAKHO — Har IIFE ke baad ; lagao!
//=======================================================
















// two iife ko likhne ke baad ; ye wal symbol mt bhulna bhai!!!!

