/*priemitive - (Number, string, boolean, bigint, null, undefined, symbol) -> its store in stack*/
/*reference -  (Array, OBject, function) -> its store in heap*/

//Array
const numbers = [1,2,3,4,5,6,7]

console.log(numbers, typeof numbers)

//object literal
const person = {
    name : "Ayush Rusiya",
    age : 19,
    city : "Bhopal",
};

console.log(person , typeof person)

//Function
//function decleration

function sayhello() {
    console.log("hello ");
}


//function calling / invoke

sayhello();

console.log(sayhello , typeof sayhello)

//operators

//arithmatic operators
let x ;

x = 5 + 5;
x = 5 - 5;
x = 5 / 5;
x = 5 * 5;
x = 5 % 5;

console.log(x)

//concatination
x = "hello" + " " + "World!"
console.log(x)

//equality operater
x = 2 == "2";
//it only checks values
x = 2 === "2";
//its check he value along with the datatypes
console.log(x);