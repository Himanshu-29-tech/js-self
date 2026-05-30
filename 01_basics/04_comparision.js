 //================ comparision of same data type ===================

console.log(2 > 1)   // true
console.log(2 >= 1)  // true
console.log(2 < 1)   // false
console.log(2 == 1)  // false
console.log(2 != 1)  // true



//================= comparision of string to digit =====================
 console.log("2" > 1); // true
 console.log("02" >= 1); // true

// JavaScript automatically string ko number mein convert karta hai comparison ke time!
// "2" → 2, "02" → 2


 console.log(null > 0);
 console.log(null == 0); 
 console.log(null >= 0);
 /*      null converted to 0 automatically
=================================================================||
Comparison    ||    Kya hota hai                    ||  Result   ||
=================================================================||
null > 0      ||    null → 0, toh 0 > 0             ||  false
null == 0     ||    == mein null convert nahi hota  ||  false
null >= 0     ||    null → 0, toh 0 >= 0            ||  true ⚠️

*/


// undefined hameshaa False 

 console.log(undefined == 0); // false
 console.log(undefined > 0); //  false
 console.log(undefined < 0); //  false

//undefined ko number mein convert karne par NaN aata hai — aur NaN kisi se bhi compare nahi hota!

 //we avoid this type of code 

 // =================== check value strictly(===) ========================

console.log("2" == 2)   // true  — sirf value check karta hai
console.log("2" === 2)  // false — value + type dono check karta hai
 