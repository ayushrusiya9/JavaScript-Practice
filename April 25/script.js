// let age = parseInt(prompt("Enter your age"))

//month start from 0 , jan-0 and dec-11
let d = new Date();
//new Date (year, month, day, hours, minutes, seconds, miliseconds)
d = new Date(2019,2,24,13,45,54)
d = new Date(2019,2,24,13,45)
d = new Date(2019,2,24,13)
d = new Date(2019,2,24)
d = new Date(2019,2)
d = new Date(2019)
//treated like miliseconds
// d = new Date(34343333434434343)

// d = new Date(34343333434434343)


//1 day have 86,400 milisecond
d = new Date(86400)


//gives you the correct date in miliseconds
const myDate = Date.now();


d = new Date()
// const year = d.getFullYear();
// const month = d.getMonth();
// const date = d.getDate();
// const minutes = d.getMinutes();

// console.log(myDate)
// console.log(year)
// console.log(month)
// console.log(day)
// console.log(date)
// console.log(minutes)

const day = d.getDay();

// if(day == 1){
//     console.log("MONDAY")
// }else if(day == 2){
//     console.log("TUESDAY");
// }else if(day == 3){
//     console.log("WEDNESDAY")
// }else if(day == 4){
//     console.log("THURSDAY");
// }else if(day == 5){
//     console.log("FRIDAY")
// }else if(day == 6){
//     console.log("SATURDAY");
// }else if(day == 7){
//     console.log("SUNDAY")
// }

