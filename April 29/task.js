const arr = [1, 2, 3, 4, 5];
arr.unshift(0)
arr.push(6)
arr.reverse()
console.log(arr)

let num1 = [1,2,3,4,5]
let num2 = [5,6,7,8,9,10]

let num3 = [...num1,...num2]
num3.splice(5,1)
console.log(num3)

