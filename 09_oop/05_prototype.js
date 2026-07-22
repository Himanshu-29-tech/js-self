// let myName = "himanshu    "
// let mychannel = "Water    "

// console.log(myName.trim().length); // output is 8
// console.log(myName.truelength); // output is 8



let myHeroes = ["Raju", "Kaju"]
// object
let heroPower = {
  Raju : "Travel",
  kaju : "Foody",

  getheroPower: function(){
    console.log(`Food is favourite of ${this.kaju}`);
  }
}

Object.prototype.himanshu = function(){
  console.log(`himanshu is present in all objects`);
}

Array.prototype.heyhimanshu = function(){
  console.log(`himanshu says hello`);
}


//heroPower.himanshu()
myHeroes.himanshu()
myHeroes.heyhimanshu()
//heroPower.heyhimanshu() // no acess of heyhimanshu()


// inheritance

const User = {
  name: "Water",
  email: "water@google.com"
}

const Teacher = {
  makeVideo : true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
   makeAssignment: 'JS assignment',
   fullTime: true,
   __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "Hamaurwo   "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);

}

anotherUsername.trueLength()
"Himanshu".trueLength()
"iceTea".trueLength()
