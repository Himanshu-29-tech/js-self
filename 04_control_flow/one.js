 // if

 if (true){

 }


 if (false){// after it code will be not executed


 }
 // comparision operators ->>>
 // <, >, <= , >= , == , != , === , !==

 const temperature = 42

 if( temperature === 40){// if condition will be true it's will be executed
    consolre.log("less than 50");
}
else { // if first condition will be false then it's will be executed
    console.log("temperature is greater than 50");
}

console.log("check your temperature")


const score = 200 

if (score >100) {
    const power = "Fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`); // power is not defined


if (score >100) {
    var power = "Fly" //  var is global so it's will be run outside the scope 
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`); 


// implicit scope
const balance =  1000

if (balance > 500) console.log("test"); // it's will be execute in one line


// Multiple conditions

if (balance < 500){
    console.log("less than 500");
} else if (balance < 750){
    console.log("less than 750");
}
else if (balance < 900){
    console.log("less than 750");

} else {
    console.log("less than 1200");
}




//+++++++++++++++++INTRESTING++++++++++++++

const userLoggedIn = true
const debitCard = true

if( userLoggedIn && debitCard && 2==3) { // if all statements are true then code further executed
    console.log("Allow to buy course");
}

if (LoggedInFromGoogle || LoggedInFromGoogle){ // if any one statement is true code will be further executed
    console.log("User logged in");
}