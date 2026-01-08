//singlton
const tinderUser = new Object()
const tinderuser1 = {}
console.log(tinderUser);// output {}
console.log(tinderuser1);// output {}

tinderuser1.id = "123abc"
tinderuser1.name = "Himanshu"
tinderuser1.isLoggedIn = false

console.log(tinderuser1);

const regularUser = {
    email: "some@gmail.com",//function ke andar FUNCTION
    fullname: {
        userfullname:{
        firstname: "Himanshu",
        lastname: "yadav"
    }
}
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj5 = Object.assign({},obj1,obj2,obj4) not mostly used
//console.log(obj5)
const obj3 = {...obj1, ...obj2}//spread methods
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"

    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderuser1);

console.log(Object.keys(tinderuser1));
console.log(Object.values(tinderuser1));
console.log(Object.entries(tinderuser1));

console.log(tinderuser1.hasOwnProperty('isLoggedIn'));