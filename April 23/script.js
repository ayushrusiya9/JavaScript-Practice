var a = Math.PI;// it return the value of pi
console.log(a);

console.log(Math.sqrt(100)); // it returns the value of aquare root of number

//ceil, floor , tofixed, abs , max, min

let output;

output = Math.abs(-78);

//takes the upper value and round off
output = Math.ceil(5.67)

//it takes the lower value and round off
output = Math.floor(5.67)

//round of any value
output = Math.round(5.67)

//it is return integer value
output = Math.trunc(5.67) 

//return -1 if nagative and 1 if num is positive, 0 if number is 0 
output = Math.sign(2)

//(x,y) return x to the power of y
output = Math.pow(5.67);

//min returns the smallest number among all
output = Math.min(23,3,2,22,34223)

//max returns the largest value
output = Math.max(23,3,2,22,34223,878434);

//returns random number b/t 0 and 1
output = Math.random();

//its return integer number b/t 0 to num
output = Math.floor(Math.random() * 10);
console.log(output);