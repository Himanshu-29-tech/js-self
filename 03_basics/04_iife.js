//Immediately Invoked Function Expression(iife)

function chai(){// named iife
    console.log('DB CONNECTED');
}
chai();
// global scope ke pollution se problem hoti hai eshliye to us global pollution ke variable ya declaration ko hataane ke liye ham iife use krte hai 
(function chai1(){
    console.log('DB CONNECTED');
})();

/// let's used by arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Himanshu')

// two iife ko likhne ke baad ; ye wal symbol mt bhulna bhai!!!!

