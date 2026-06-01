 let a = 100
 const b =200
 var c =300
 //global functions

if (true) {
    let a = 10 // new a
    const b = 20 // new b
    c = 30 // bahar wala c badal gya 
    console.log("INNER: ",a); // 10
    console.log("INNER: ",b); // 20
    console.log("INNER: ",c); // 30
// local functions
}


 console.log(a); // 100 - bahar wala 'a' safe hai
 console.log(b); // 200 - bahar wala 'b' safe hai
 console.log(c); // 30 - var badal gya!



 function one (){
    const username = "Himanshu"

    function two(){// function inside the function is nested  
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
 }

 one()
/*
 Scope Chain:
┌─────────────────────────┐
│  one()                  │
│  username = "Himanshu"  │
│  ┌───────────────────┐  │
│  │  two()            │  │
│  │  website="youtube"│  │
│  │  ✅ username dekh  │  │
│  │  sakta hai        │  │
│  └───────────────────┘  │
│  ❌ website nahi dekh   │
│  sakta                  │
└─────────────────────────┘

*/
 //================== IF SCOPE =================


 if (true){
    const username = "Himanshu"
    if (username === "Himanshu"){
        const website = "youtube"
        console.log(username + website); //HimanshuYoutube

    }
    //console.log(website);
 }

 //console.log(username);





//======================= Hoisting =====================
//normal function --->>> First call then declare 

console.log(addone(5)) // 6 koi error nhi! 

 function addone(num) {
    return num + 1
 }


// function expression --->>> pehle call, baad mein declare

 addTwo(5) 
 const addTwo = function(num) {
    return num + 2
 }


 //HOISTING:
//  Normal Function    — Pehle call kar sakte ✅
//  Function Expression— Pehle call nahi kar sakte ❌