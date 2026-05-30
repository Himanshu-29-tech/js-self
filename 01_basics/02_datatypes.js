 "use strict";

/*  
Strict mode = Strict teacher 😃
Bina strict — galtiyan ignore hoti hain
Strict ke saath — har galti pakdi jaati hai
*/

console.log(3 + 3)
console.log("Himanshu")

let name = "Himanshu"   // string
let age = 18            // number
let isLoggedIn = false  // boolean

/*
================================================================
JavaScript ke 7 Primitive Data Types:
Data Type  ||  Example          ||  Matlab
================================================================
String     ||  "Himanshu"       ||  Text
Number     ||  18               ||  2^53 tak
BigInt     ||  9999999999999999n||  Bahut bada number
Boolean    ||  true / false     ||  Haan ya Naa
null       ||  null             ||  Jaanbujhkar khaali rakha
undefined  ||  let x;           ||  Value di hi nahi
Symbol     ||  Symbol("id")     ||  Hamesha unique value
================================================================
*/

console.log(typeof "himanshu");  // string
console.log(typeof age);         // number
console.log(typeof null);        // object ⚠️ (purana bug)
console.log(typeof undefined);   // undefined

/*
null -->> object kyun?
Purane JS mein null object tha
Ab fix ho gaya hai internally
Par change nahi kar sakte — 
poori duniya ka code toot jaayega! 😅
*/