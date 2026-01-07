//singleton
//Obect.create
//object literals

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
console.log(jsUser.email)
console.log(jsUser["email"])//square backet use krte hai
console.log(jsUser["fullname"])
console.log(jsUser[mySym])

jsUser.email = "Himanshuaman92@g.com"//to change something
//Object.freeze(jsUser)//to freeze means don't change anything
jsUser.email = "Himanshuaman92@g.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Helo js useer");
}

jsUser.greetingTwo = function(){
    console.log(`Helo js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



