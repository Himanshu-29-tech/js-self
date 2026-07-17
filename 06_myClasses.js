// ES6 

class User {
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
  }

  encryptPassword(){
    return `${this.password}abc`
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}

const water = new User("Water" , "water@gmail.com", "123")
console.log(water.encryptPassword());
console.log(water.changeUsername());


// behind the scene

function User2 (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
  }

  User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
  }

  User2.prototype.changeUsername = function(){
    return `${this.toUpperCase()}`
  }

  const tea =  new User2("tea","tea@google.com","567")

  console.log(tea.encryptPassword());
  console.log(tea.changeUsername());
