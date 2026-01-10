const user = {
    username:"Himanshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);// current context ke liye this use krte hai
    }
}

user.welcomeMessage()
user.username = "samkaran"
user.welcomeMessage()




function chai(){
    let username = "Himu"
    console.log(this.username);//undefined you can't used this for a function only used in the object.
}

chai()
// function aise likhte the  


// const chai = function () {
//     let username = "Himu"
//     console.log(this.username);
// }
// chai()//undefined


//++++++++++Arrow function+++++++++
const chai1 =  () => { // function ko hatakar bracket ke baad arrow lga do
    let username = "Himu"
    console.log(this.username);
}
chai1()//undefined



 const addTwo = (num1,num2) => {
    return num1 + num2
 }//when we use{} we have to write return

 console.log(addTwo(3,4))

 const addTwo2 = (num1,num2) => ( num1 + num2 )
 //when we used () we donot have to write return

 const addTwo3 = (num1,num2) => ({username: "Himanshu"})

 console.log(addTwo2(3,4))

 

