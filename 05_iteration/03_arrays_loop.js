// for of 

//["","",""] // we can put object inside the array
//[{},{},{}]


// syntax --->>

// for (const element of object) {
    
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello world!"
for (const  greet of  greetings) {
    console.log(`Each char is ${greet}`)
}




// Maps


// no any duplicates values,all are unique value

const map = new Map()
map.set("IN", "India")
map.set("USA", "United states of America")
map.set("Fr", "France")

console.log(map);



for (const  key of map) {
    console.log(key);
}

for (const [key, value ] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}


// map are iterable, but for object there's another methods

// for (const [key, value ] of myObject) {
//     console.log(key, ':-', value); 
// } 
