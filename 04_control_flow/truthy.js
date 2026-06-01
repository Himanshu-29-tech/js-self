 const userEmail = "himanshu@ji.ai"

 if (userEmail) {
    console.log("Got user email");//it's will be executed when there's some value on userEmail or its [] empty  array
 } else {
    console.log("Don't have user email");// it's will be executed when there's no userEmail
}

// falsy values

// false, 0 , -0 , BigInt 0n , "" , null , undefined, NaN(NOt a Number)

//Truthy vlaues

// "0" , "false" , " " , [] , {} , function(){}

if (userEmail.length == 0){
    console,log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log("object is empty");
} 


//Nullish Coalescing operator (??) : null undefined 
// Simple idea 💡
// If the value is:
// null ❌
// undefined ❌
// → use the backup value
// Otherwise → use the original value ✅

let val1;
val1 = 5 ?? 10  // 5    — value hai, backup nahi lega ✅
val1 = null ?? 10  // 10   — null hai, backup lega ✅

console.log(val1); // 10


// Terniary Operator
// conditions ? True: false 

const iceTeaprice = 100 
iceTeaprice >= 80 ? console.log("les than 80"): console.log("more than 80")




/*

=======================================================
   TRUTHY/FALSY + ?? + TERNARY QUICK REFERENCE
=======================================================
 FALSY:  false, 0, -0, 0n, "", null, undefined, NaN
 TRUTHY: "0", "false", " ", [], {}, function(){}
=======================================================
 EMPTY CHECK:
 Array  — arr.length === 0
 Object — Object.keys(obj).length === 0
=======================================================
 NULLISH COALESCING ??
 null ?? "backup"      → "backup"
 undefined ?? "backup" → "backup"
 0 ?? "backup"         → 0       ← 0 valid hai! ✅
 "" ?? "backup"        → ""      ← "" valid hai! ✅
=======================================================
 TERNARY:
 condition ? "true case" : "false case"
=======================================================

*/
