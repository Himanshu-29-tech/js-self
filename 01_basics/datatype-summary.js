//primitive data types

// 7 types: string,numbers,boolean,null,undefined{variable decide HAI LEKIN KYA VALUE HOGI WO ABHI DECIDE NHI HAI}
//symbol(KISHI VALUE KO ADVANCED BANANE KE LIYE USE HOTA HAI),BigInt

const score = 180
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;            //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);   // false 
// Dekhne mein same lagte hain — par dono bilkul alag hain!
// Symbol ka kaam hi yahi hai — guaranteed unique value dena! 🔑


const bigNumer = 345675325293534989n     //last me  n lga do


//Reference (Non primitive)

//Array,Objects,functions

const heroes = ["Shaktiman","naagraj","doga"]//square bracket 
let myObj = {
    name: "himanshu",
    age: 19,
}//{} bracket
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof(outsideTemp)); //>object 



//++++++++++++++++++MEMORYY++++++++++++++++++++++
// Stack memory(Primitive){COPY VALUE MILTI HAI}, Heap memory(Non-Primitive){ORIGINAL VALUE MILTI HAI}
let myYoutubechannelname = "studyr"

let anothername = myYoutubechannelname  // COPY milti hai
anothername = "himanshujivlog"          // sirf copy badla

console.log(myYoutubechannelname);    // "studyr" — original safe! ✅
console.log(anothername);       // "himanshujivlog"

/*

Stack Memory:
┌─────────────────────────────────┐
│ myYoutubechannelname = "studyr" │  ← Original — safe!
│ anothername = "himanshujivlog"  │  ← Alag copy
└─────────────────────────────────┘
*/

//=============== non primitive type ===============
let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo =  userOne  // ORIGINAL ka reference milta hai — copy nahi!

userTwo.email = "yodhawarrior@google.com"

console.log(userOne.email);   // "yodhawarrior@google.com" ⚠️ BADAL GAYA!
console.log(userTwo.email);   // "yodhawarrior@google.com"

/*

Heap Memory:
┌──────────────────────────────────────┐
│  { email: "yodhawarrior@google.com"  │
│    upi: "user@ybl" }                 │
└──────────────────────────────────────┘
        ↑               ↑
    userOne           userTwo
  (same object ko point kar rahe hain!)


*/