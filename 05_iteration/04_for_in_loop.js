// for in loops
// ⬇ ️ ️ ️ ️️
// | Loop       | What it gives      | Use when                              |
// | ---------- | ------------------ | ------------------------------------- |
// | `for...in` | **keys / indexes** | Objects, when you need property names |
// | `for...of` | **values**         | Arrays, strings, when you need items  |


const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

// syntax

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


// for in loop in map 

const map = new Map()
map.set("IN", "India")
map.set("USA", "United states of America")
map.set("Fr", "France")

for(const key in map){
    console.log(key);
}

// maps are not iterable, so we can't acess through loop


// for...in → keys 🔑
// for...of → values 🎁