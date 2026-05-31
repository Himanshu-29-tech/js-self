//array
 
 const myArr = [0,1,2,3,4,5,true,"himanshu"]// multiple  types ek sath use kar sakte hai
 // mutable -->> const hai par value change ho sakta hai 
 console.log(myArr[0])  //first index start with 0

//💁 const array = Nayi array assign nahi kar sakte but we can change the value.



 const myHeroes = ["Shaktiman","Balveer"]
 console.log(myHeroes[1])

 //==================== Arrays methods =======================


myArr.push(6)// to add element at last.--->> [0,1,2,3,4,5,true,"himanshu",6]
myArr.push(7). // [0,1,2,3,4,5,true,"himanshu",6,7]
myArr.pop()//it's remove the last value  --->> [0,1,2,3,4,5,true,"himanshu",6]  - 7 remove  
console.log(myArr);

myArr.unshift(9)// start the element at first ---->> [9,0,1,2,3,4,5,true,"himanshu",6]
myArr.shift()  //remove the element  ---->> [0,1,2,3,4,5,true,"himanshu",6] — 9 remove
console.log(myArr);

console.log(myArr.includes(9));//return boolean values --->> False 
console.log(myArr.indexOf(7)); // -1 

/*
🐼 why - 1 ?
if element is not found then indexof return -1

*/


//============== join -- Array to string ===============

const newArr = myArr.join()
console.log(myArr); // [0,1,2,3,4,5,true,"himanshu",6] → "0,1,2,3,4,5,true,himanshu,6"
console.log(typeof newArr);// it's value will be string
//================ Slice vs Splice =======================

//slice = copy ✂️
//splice = change 


console.log("A",myArr);

const myn1 = myArr.slice(1,3)//Take out a piece (does NOT change original)

console.log(myn1); // [1, 2] — copy nikali
console.log("B",myArr);

const myn2 = myArr.splice(1,3)//Take out a piece (change original)
console.log("C",myArr);  // ⚠️ Original BADAL GAYA — 3 elements gaye
console.log(myn2);  // [1, 2, 3] — jo nikala woh

/*
Slice vs Splice — Difference Table:
=======================================================================

                           slice()         ||    splice()
Original badlta hai?       ❌ Nahi         ||    ✅ Haan!
Parameters                  (start, end)   ||   (start, deleteCount)
End index                   Included nahi  ||    deleteCount kitne hatao
Kaam                        Sirf copy      ||     Kaat ke nikalo

===========================================================================


===========================================================================
Quick Reference — Saare Methods:

===========================================================================
Method           ||    Kaam             || Original Badlta?
===========================================================================
push()           ||    End mein add✅   || Haan
pop()            ||    End se remove✅  || Haan
unshift()        ||    Start mein add✅ || Haan
shift()          ||    Start se remove✅|| Haan
includes()       ||    Check karo❌     || Nahi
indexOf()        ||    Position batao❌ || Nahi
join().          ||    String banao❌   || Nahi
slice()          ||    Copy nikalo❌    || Nahi
splice()         ||    Kaat ke nikalo✅ || Haan

===========================================================================


*/
