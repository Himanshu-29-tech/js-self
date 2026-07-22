class User {
  constructor(email, password){
    this.email = email;
    this.password = password
  }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
     this._email = value
  }

  get password(){ // if you want to get(access) the value out of the class
    return this._password.toUpperCase()
    
  }
  set password(value){  // if you want to set the value inside the class
    this._password = value.toUpperCase()

  }
}


const himanshu = new User("h@himanshu.ai", "abc")
console.log(himanshu.email);
