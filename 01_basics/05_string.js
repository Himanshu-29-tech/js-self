const name = "himanshu"
const repocount = 5

//console.log(name+ repocount +" value"); old methods

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);//new methods
 //Output: Hello my name is himanshu and my repo count is 5

 // ** Backtick (`-----` )** use hota hai — quote" "nahi!  ${}`
 //{} ke andar koi bhi variable ya expression likh sakte ho!


//============================= New String() ===============================================

const gameName = new String("himanshu-ji")

console.log(gameName[0]);        // "h" — index se character
console.log(gameName.__proto__); // String ke saare methods dikhata hai
console.log(gameName.length);   // 11



console.log(gameName.toUpperCase()); // "HIMANSHU-JI"
console.log(gameName.charAt(3))   // "a" — position 3 pe kaun sa char?
console.log(gameName.indexOf("m"))// 2  — "m" kaun se position pe hai?


const newstring = gameName.substring(0,4)//n-1 will bre print
console.log(newstring); // "hima" — 0 se 3 tak (n-1)


const anotherstring = gameName.slice(-4,4)//you can give negative values in slice
console.log(anotherstring);  // " " 💁 empty!

// why it is empty???
// gameName = "himanshu-ji"
//             0123456789...
// -4 matlab peeche se 4 = position 7 = "s"
// slice(7, 4) — 7 se 4 tak?? Seedha nahi ja sakta — empty aayega!


const newstringone = "   himanshu  "
console.log(newstringone); // "   himanshu  "
console.log(newstringone.trim());  // "himanshu" — spaces gone!

// trimStart() — sirf aage se
// trimEnd() — sirf peeche se


const url = "https://himanshu.com%29"

console.log(url.replace('%29','-')) // Output: "https://himanshu.com-"  - value change

console.log(url.includes('aman')) // false — "aman" nahi hai url mein. -->> it's check value is present or not
console.log(url.includes('himan')) // true ✅

console.log(gameName.split('-')); 
//  Output: ["himanshu", "ji"]
 //  String ko Array mein todna


 /* Quick Reference Table:
 ===================================================================
Method          ||         Kaam        ||     Output
=====================================================================
toUpperCase()   ||   Sab capital       ||   "HIMANSHU-JI"
charAt(3)       ||   Position pe char  ||   "a"
indexOf("m")    ||   Char ki position  ||   2
substring(0,4)  ||   Part nikalna      ||   "hima"
slice(-4)       ||   Peeche se part    ||   "s-ji"
trim()          ||   Spaces hatana     ||   "himanshu"
replace()       ||   Value badalna     ||   "...com-"
includes()      ||   Check karna       ||   true/false
split('-')      ||   Array mein todna  ||   ["himanshu","ji"]


*/
