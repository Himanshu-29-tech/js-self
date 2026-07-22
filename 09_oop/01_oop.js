const user = {
  username: "Himanshu",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    //console.log("Got user details from database");
    //console.log(`username: ${this.username}`);
    console.log(this);
    
  }
}

const user2 = {
  username: "Himanshu",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    //console.log("Got user details from database");
    //console.log(`username: ${this.username}`);
   // console.log(this);
    
  }
}


// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount , isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
    
  }

  return this
}

const userOne = new User("Himanshu",12,true)
const usertwo = new User("Aman",11,false)

console.log(userOne.constructor);
//console.log(usertwo);



