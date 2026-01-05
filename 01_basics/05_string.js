const name = "himanshu"
const repocount = 5

//console.log(name+ repocount +" value"); old methods

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);//new methods


const gameName = new String("himanshu-ji")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));//kaun sa position pe kaun sa char hai
console.log(gameName.indexOf("m"));//kaun sa char kaun se position pe hai


 const newstring = gameName.substring(0,4)//n-1 will bre print
 console.log(newstring);

 const anotherstring = gameName.slice(-4,4)//you can give negative values in slice
 console.log(anotherstring);

 const newstringone = "   himanshu  "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://himanshu.com%29"

 console.log(url.replace('%29','-'))

 console.log(url.includes('aman'))

 console.log(gameName.split('-'));
 
