let fruits = ['Mango', 'strawberry', 'grapes', 'kiwi']

//starting index, element to remove, element to add

fruits.splice(0, 2, 'red', 'yellow','blue')

console.log(fruits)

fruits.reverse()//revers all elemnt of array
console.log(fruits)

//include
console.log(fruits.includes(21))

//indexof
fruits.includes(fruits.indexOf("red"))

//converting array into string
let x = fruits.toString();
x = fruits.join();
console.log(x)

//string to array
x = x.split(",")
console.log(fruits)

//concatination inarray

console.log(fruits.slice(1,4).reverse().toString().charAt(0))

//another way to check array

let y = Array.isArray(fruits)
console.log(y)

//concatination
const num1 = [1,2,3,4,5]
const num2 = [7,8,9]

const numbers = num1.concat(num2)
console.log(numbers)

//spread operation(...)
let numbers2 = [...num1,...num2]
console.log(numbers2)