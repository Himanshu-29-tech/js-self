 let a = 100
 const b =200
 var c =300
 //global functions

if (true) {
    let a = 10
    const b = 20
    c = 30
    console.log("INNER: ",a);
    console.log("INNER: ",b);
    console.log("INNER: ",c);
// local functions
}


 console.log(a);
 console.log(b);
 console.log(c);



 function one (){
    const username = "Himanshu"

    function two(){// function inside the function is nested  
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
 }

 one()

 //++++++IF SCOPE+++++++


 if (true){
    const username = "Himanshu"
    if (username === "Himanshu"){
        const website = "youtube"
        console.log(username + website);

    }
    //console.log(website);
 }

 //console.log(username);






 //++++++++++++++++++++++ interesting +++++++++++++++++++

 function addone(num){
    return num + 1
 }

 addone(5)

 const addTwo = function(num){
    return num + 2
}       addTwo(num: any):
        any
addTwo()
 