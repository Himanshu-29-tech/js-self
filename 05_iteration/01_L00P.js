//  for loop

// syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// --->>>> let index = 0 ------->>> declare a variable
// --->>>> index < array.length ------>>> a condition
// --->>>> index++.  -------->>>> incrimitatin
// --->>>> {const element = array[index]}    ------>>>>execution scope


for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is best number");
    }
    console.log(element);
    
}

//+++++++++++++ NESTING OF LOOPS++++++++
for (let i = 0; i <= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++ ){
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}


for(let k = 0; k <= 10; k++) {
    console.log(`Outer loop value: ${k}`);
    for (let m = 0; m <= 10; m++){
        console.log(k + '*' + m + '=' + k*m );

    }
}


// Arrays in for loop

let myArray = ["flash", "batman" , "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


// break and continue 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break // to break control flow
    }
    console.log(`value of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // to skip current value but move ion cor further
    }
    console.log(`value of i is ${index}`);
}
