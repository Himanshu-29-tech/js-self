// while Loop

// syntax

// while (condition) {
    
// }

let index = 0   // declare a variable
while (index <= 10) { // while loop with valid condition
    console.log(`value of index is ${index}`); // value that's going to be execute or print
    index = index + 2 // incrimination 
}

//💁 IN FOR LOOPS ---->>>> 
// for (let index = 0; index < 10; index++) {      //---->>>>  first write >>> for >>>> declaration of variable >>>> condition >>>> incrimination >>>>{ print statement  }
//   const element = index;
//   console.log(element);
// }


//💁 IN WHILE LOOPS ---->>>> 
// let index = 0                        //---->>>> first declaration of variable >>>> while >>>>> condition >>>> {print statement}  >>>> incrimination
// while (index <= 10) { 
//     console.log(`value of index is ${index}`); 
//     index = index + 2 




//  array in while loop

let myArray = ['flash', "batman" , "superman"]

let arr = 0
while (arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


// --->>>>>> Do while Loop >>>>>>-----

// syntax

// do {            >>>>> first do his work
    
// } while (condition);         >>>>>> then condition will be checked

let score = 1 

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);




let score1 = 12 

do {
    console.log(`Score1 is ${score1}`);
    score1++
} while (score1 <= 10);

// 1 st execution will be happen then check the condition

