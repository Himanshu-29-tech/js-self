 let score = "himanshu"

 console.log(typeof score);
 console.log(typeof(score));

 // both are same and give same result 

let valueInNumber = Number(score) //change the string value to int
 console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
==============================================
Conversion Rules:
Value        ||    Number()result   
"33"         ||    33 ✅
"33abc"      ||    NaN ❌
""           ||    0
true         ||    1
false        ||    0
"himanshu"   ||    NaN ❌

=================================================
NaN = Not a Number — matlab conversion ho nahi payi, par type number hi rahega! ⚠️

*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLoggedIn1 =""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);


//=======================================================


let someNumber = 33 

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//====================== operations ============================

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2)   // 4
console.log(2-2)   // 0
console.log(2*2)   // 4
console.log(2**3)  // 8  — 2 ki power 3
console.log(2/3)   // 0.666...
console.log(2%3)   // 2  — remainder

let str1 = "hello"
let str2 = "himanshu"

let str3 = str1 + str2
console.log(str3); // "hellohimanshu"


console.log("1" + 2)      // "12"  — string + number = string
console.log(1 + "2")      // "12"  — number + string = string
console.log("1" + 2 + 2)  // "122" — left se right, pehle "1"+2="12", phir "12"+2="122"
console.log(1 + 2 + "2")  // "32"  — pehle 1+2=3, phir 3+"2"="32"

console.log(true)   // true
console.log(+true)  // 1  💁 + lgane se number ban jaata hai
console.log(+"")    // 0  💁  empty string = 0


//================= Chain Rule ===================

let num1,num2,num3
num1 = num2 =  num3 = 2 + 2
// num3 = 4, num2 = 4, num1 = 4
// Right se left assign hota hai! ➡️⬅️


let gamecounter = 100
++gamecounter;
console.log(gamecounter);


// ++gamecounter         Pehle badhaao, phir use karo
// gamecounter++         Pehle use karo, phir badhaao


let a = 5
console.log(++a)  // 6 — pehle badha
console.log(a++)  // 6 — pehle print, phir badha
console.log(a)    // 7


//go through documentation of mdn increment operator

