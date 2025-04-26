// Array

let numbers = [1,2,3,4,5,6,] //array litrals 

let fruits = ["apple", "kiwi","mango"]

let mixed = [23, true , {name: "ayush"}];

console.log(numbers[0]);
console.log(fruits[1]);
console.log(mixed[2])
console.log(mixed[2].name)

//array constructer
let names = new Array("ayush", "rahul","shyam")
console.log(names)

//empty 
let colors = []

colors[0] = "bule"
colors[1] = "red"
colors[2] = "yellow"

console.log(colors)

let num = [1,2,3,4,5,6]

//adds an element to the end of array
num.push(8)

//returns the length of array
console.log(num.length)

//remove elemnt from end an arry
console.log(num.pop())

//unshift add an element to the start of an array
console.log(num.unshift(12))

//shift remove element from start of an array
console.log(num.shift())

//slice - extract or return the number of elelemnt from sn array 
//(starting index to ending index not included)
//also it does not change the original array
let x;
x = num.slice(0,3);
console.log(x)

//splice - it is a similar to slice their 
x = num.splice(1,2) 
console.log(num)
