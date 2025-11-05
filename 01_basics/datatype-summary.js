//primitive data types

// 7 types: string,numbers,boolean,null,undefined{variable decide HAI LEKIN KYA VALUE HOGI WO ABHI DECIDE NHI HAI}
//symbol(KISHI VALUE KO ADVANCED BANANE KE LIYE USE HOTA HAI),BigInt

const score = 180
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumer = 345675325293534989n


//Reference (Non primitive)
//Array,Objects,functions

const heroes = ["Shaktiman","naagraj","doga"]
let myObj = {
    name: "himanshu",
    age: 19,
}
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof(outsideTemp)); //>object
