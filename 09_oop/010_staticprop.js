class User {
  constructor(username) {
    this.username = username
  }

  logMe(){
    console.log(`Username: ${this.username}`);
  }

   static createId(){   // use of static stop the methods that are going to be used 
    return `123`
  }
}

const himanshu = new User("himanshu")
console.log(himanshu.createId())


class Teacher extends User {
  constructor(username,email){
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
