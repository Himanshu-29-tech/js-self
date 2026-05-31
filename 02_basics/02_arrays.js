 const marvel_heroes = ["thor","Ironman","spiderman"]
 const dc_heroes = ["superman","flash","batman"]

 marvel_heroes.push(dc_heroes)
// ["thor","Ironman","spiderman", ["superman","flash","batman"]]
//                               ↑ Array andar array aa gaya! ❌
//console.log(marvel_heroes);

 const allheroes = marvel_heroes.concat(dc_heroes);
console.log(allheroes);
// ["thor","Ironman","spiderman","superman","flash","batman"]

//================ arrays spread ===========================

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// ["thor","Ironman","spiderman","superman","flash","batman"]
console.log(all_new_heroes);
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity)//flat make all arrays in one array.
//Infinity use karo — kitne bhi nested ho, sab flat ho jaayega! 🔑
console.log(real_another_array); // [1,2,3,4,5,6,7,6,7,4,5] ✅ 


//  Array.isAraay() ---->> Array hai ya nhi?


console.log(Array.isArray("Himanshu"))//return boolean values
console.log(Array.from("Himanshu"))//form array in object  // ["H","i","m","a","n","s","h","u"] ✅

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// [100, 200, 300] ✅

/*         ARRAY METHODS QUICK REFERENCE
================================================
 Method              Kaam                Output
------------------------------------------------
 push(arr)        — Nested add        — [[...]] ❌
 concat(arr)      — Flat combine      — [...]   ✅
 [...a,...b]      — Spread best       — [...]   ✅
 flat(Infinity)   — Sab nested seedha — [...]   ✅
 Array.isArray()  — Check karo        — true/false
 Array.from()     — Kuch bhi → Array  — [...]
 Array.of()       — Variables → Array — [...]
================================================

*/