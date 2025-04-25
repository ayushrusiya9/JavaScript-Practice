// let a = parseInt(prompt("Enter number"));
// let b = parseInt(prompt("Enter anothee number"));
// let c = a + b;
// console.log(c, typeof(c))

//wap to find area of circle pir2
// let redius = parseInt(prompt("Enter redius"))
// let pi = Math.PI;

// let result = pi * redius * redius;
// console.log(result)

//wap to check number is positve or negetive
// let num = parseInt(prompt("Enter number"))

// if(num >= 0){
//   console.log("Positive")
// }else{
//   console.log("Nagetive")
// }

//wap to check number is evn or odd
// let num = parseInt(prompt("Enter number"));

// if(num % 2 == 0){
//     console.log("even")
// }
// else
// {
//     console.log("odd")
// }

// WAP  to take two inputs from the user and check first input is even or odd if first input is even then print multiplications of both inputs if a first input is odd then find area of triagle of second input.
// let num1 = parseInt(prompt("Enter 1 number"));
// let num2 = parseInt(prompt("Enter 2 number"));
// let flag = 0;

// if(num1 % 2 == 0){
//     console.log("even")
//     console.log(num1 * num2);
// }
// else
// {
//     console.log("odd")
//     console.log(0.5 * num1 * num2)
// }
//wap to print a program to print any number table

// let n = parseInt(prompt("enter number"))

// for ( let i = 1; 10 >=i; i++){
//   console.log(n + "x" + i + " = " + n * i)
// }
//wap to take an input from the user and check number is odd or even if number is odd print the reverse table of the number if number is even square number and print table of square number

let num = parseInt(prompt("Enter number"))
// let num = 2
if(num % 2 != 0){
  console.log("odd")
  for(let i = 10; 1<=i; i--){
    console.log(num + " x " + i + " = " +  num*i)
  }
}else{
  console.log("Even")
  let n = num * num;
  for(let i = 1; 10 >= i; i++){
    console.log(n + " x " + i + " = " + n * i)
  }
}