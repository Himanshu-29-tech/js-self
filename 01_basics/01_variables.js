const accountId = 12945
// const to bhai change nhi ho sakta

let accountEmail = "himanshuji.com"
var accountPassword = "12345"
// variable likhne ke do tarika 
// 1 --->>> let
// 2 --->>> var
accoountCity = "Delhi"      // here we dont declare let or var so javascript automatically convert it in to a global var
// global var -->>> global var us used for whole program but it's not good to do it.
let accountstate;          // javascript is undefned.






//================================================


// lets do some changes 
// accountId = 2// not allowed -->> because accountId is const ad const not allowed to changes
// shotcut-log+enter
accountEmail = "hji@29.com"
accountPassword = "45673"
accountcity = "Rajasthan"


console.log(accountId); 
console.log(accountEmail)


// sabko baar baar kyu likhna eshliye dictionary bnaate hai ji

console.table([accountId,accountEmail,accountPassword,accoountCity])

/* Key Takeaways
===========================================================
ConceptExplanation
|| const      ||  Ek baar assign, phir change nahi            ||
|| let        ||  Block-scoped, change allowed                ||
|| var        ||  Function-scoped, purana tarika — avoid karo ||
|| Binakey    ||  Implicit global — kabhi mat karo            || 
|| undefivar  || declare hua, value assign nahi hui           ||

===================================================================
/*