//Dates
let myDate = new Date()
console.log(myDate.toString());//Tue Jan 06 2026 00:03:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Jan 06 2026
console.log(myDate.toLocaleString());//1/6/2026, 12:03:19 AM
console.log(typeof myDate);//object


let myCreatedDate = new Date(2023,0,23)
let myCreatedDate1 = new Date(2023,0,23,5,3)
let myCreatedDate2 = new Date("2023-01-18")
let myCreatedDate3 = new Date("03-13-2025")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate3.toDateString());

//time stamp


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long"
})



