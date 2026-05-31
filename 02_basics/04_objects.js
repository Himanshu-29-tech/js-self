//singlton vs object literal
const tinderUser = new Object() // singleton - new keyword se
const tinderuser1 = {}     // oject literal -- simplest way
console.log(tinderUser);// output {}
console.log(tinderuser1);// output {}

tinderuser1.id = "123abc"
tinderuser1.name = "Himanshu"
tinderuser1.isLoggedIn = false

console.log(tinderuser1);

const regularUser = {
    email: "some@gmail.com",
    fullname: {    //function ke andar FUNCTION
        userfullname:{
        firstname: "Himanshu",
        lastname: "yadav"
     }
   }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
 // Nested object access = Dot lagaate jao! 🔑

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }  // // { obj1: {1:"a", 2:"b"}, obj2: {3:"c", 4:"d"} }

const obj5 = Object.assign({},obj1,obj2,obj4) //not mostly used
console.log(obj5)
const obj3 = {...obj1, ...obj2} //spread methods
console.log(obj3);
// { 1:"a", 2:"b", 3:"c", 4:"d" }







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

console.log(Object.keys(tinderuser1)); // ["id", "name", "isLoggedIn"]       — saari keys
console.log(Object.values(tinderuser1)); // ["123abc", "Himanshu", false]      — saari values
console.log(Object.entries(tinderuser1)); // [["id","123abc"], ["name","Himanshu"], ["isLoggedIn",false]]


console.log(tinderuser1.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js by himanshu",
    price: "999",
    courseInstructor: "himanshu"
}

//course.courseInstructor

const{courseInstructor} = course
const{courseInstructor:instructor} = course//if you want to give short form
console.log(courseInstructor);
console.log(instructor);

 /*
====================  API ======================================

API - whenever you need to delegate something to others then you use API
in easy words"JAB KABHI APNA KAAM KISI AUR SE KARWANA HO TO API USE KRTE HAI




====================  json ==========================

{
    "name": "himanshu",//keys and value both are in string
    "coursename": "js in hindi",
    "price": "free"
}

=====================================================
        OBJECTS ADVANCED QUICK REFERENCE
=====================================================
 Kaam                    Syntax
-----------------------------------------------------
 Nested access        — obj.a.b.c
 Combine objects      — {...obj1, ...obj2}  ✅
 Saari keys           — Object.keys(obj)
 Saari values         — Object.values(obj)
 Key-value pairs      — Object.entries(obj)
 Property check       — obj.hasOwnProperty('key')
 Destructuring        — const { key } = obj
 Rename               — const { key: newName } = obj
=====================================================
   */