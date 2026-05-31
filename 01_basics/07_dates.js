//Dates
let myDate = new Date()
console.log(myDate.toString());//Tue Jan 06 2026 00:03:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Jan 06 2026
console.log(myDate.toLocaleString());//1/6/2026, 12:03:19 AM
console.log(typeof myDate);//object


let myCreatedDate  = new Date(2023, 0, 23)       // Year, Month, Day
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) // Year, Month, Day, Hour, Min
let myCreatedDate2 = new Date("2023-01-18")       // ISO format
let myCreatedDate3 = new Date("03-13-2025")       // MM-DD-YYYY
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate3.toDateString());

//time stamp


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  // seconds mein convert

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default', {
    weekday: "long",   // "Tuesday"
    year: "numeric",   // "2026"
    month: "long",     // "January"
    day: "numeric"     // "6"
}))
// Output: "Tuesday, January 6, 2026"

/* Quick Reference Table:
======================================================
Method           ||     Output
======================================================
toString()       ||     Full date + time + timezone
toDateString()   ||     "Tue Jan 06 2026"
toLocaleString() ||     "1/6/2026, 12:03:19 AM"
getTime()        ||     Milliseconds since 1970
Date.now()       ||     Current milliseconds
getMonth()       ||     0-11 ⚠️
getDay()         ||     0-6 ⚠️ Sunday=0
getDate()        ||     1-31 actual din
getFullYear()    ||     2026
========================================================
*/

