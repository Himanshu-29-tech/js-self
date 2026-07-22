class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // Calls the User constructor
    this.email = email;
    this.password = password;
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

// // Create an object
// const teacher = new Teacher("Aman", "aman@example.com", "12345");

// teacher.logMe(); // USERNAME is Aman

// console.log(teacher.username); // Aman
// console.log(teacher.email);    // aman@example.com
// console.log(teacher.password); // 12345

const water =  new Teacher("chai","chai@teacher.com", "123")

water.addCourse()
const masalaChai = new User("masalachai")

masalaChai.logMe()

console.log(water instanceof Teacher) // true


