//singleton  ---->> Obect.create se Poori duniya me sirf ek hi instance bnata hai.    🌲
//object literals  🌲 Sabse simple tarika

const mySym = Symbol("Key 1")

const jsUser = {
    name: "Himanshu",
    fullname: "Himanshu Yadav",
    age: 18,
    [mySym]:"mykey1",//use square bracet for symbol
    location: "Haryana",
    email: "himuji@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}


/* 👍 for object access TWO METHODS
1------>> Dot notaion
2------>> Bracket notation
*/

console.log(jsUser.email)
console.log(jsUser["email"])//square bracket use krte hai
console.log(jsUser["fullname"])
console.log(jsUser[mySym])

jsUser.email = "Himanshuaman92@g.com"//to change something
Object.freeze(jsUser)//to freeze means don't change anything
jsUser.email = "Himanshuaman92@g.com" // silently ignore -- no error
//console.log(jsUser);
// -------->> object.freeze() ke baad koi bhi change silently iugnore hota hai -- eroor nhi aata!
jsUser.greeting = function(){
    console.log("Helo js useer");
}

jsUser.greetingTwo = function(){
    console.log(`Helo js user,${this.name}`);
}                          //  👆 this = jsUser object

jsUser.greeting();
jsUser.greetingTwo();

// if we put console.log(jsUser.greeting) then  it's print undefined

/*
================================================
        OBJECTS QUICK REFERENCE
================================================
 Kaam                    Syntax
------------------------------------------------
 Object banana        — const obj = {}
 Dot access           — obj.key
 Bracket access       — obj["key"]
 Symbol access        — obj[symVar]
 Value change         — obj.key = newValue
 Freeze               — Object.freeze(obj)
 Method add           — obj.fn = function(){}
 this use karna       — this.key
================================================

*/




//=====================================================
//          ARRAY vs OBJECT
//=====================================================
//  Feature         Array           Object
//-----------------------------------------------------
//  Syntax          []              {}
//  Access          index (0,1,2)   key (name,age)
//  Order           ✅ Ordered      ❌ No order
//  Use case        List of items   One item's details
//  typeof          "object" ⚠️     "object" ⚠️
//  Check karo      isArray()✅     isArray()❌
//  Loop            map,filter      Object.keys()
//=====================================================