//type conversion

//String to number conversion

var a = "5.67";
a = Number(a);
//parseInt and parseFloat 
a = parseInt(a);
a = parseFloat(a);

console.log(a, typeof a);


//number to string
var b = 45;
// b = b.toString;
b = String(b);

console.log(b,typeof b);


//to boolean
a = Boolean(a);
b = Boolean(b);

console.log(a, typeof a);
console.log(b, typeof b);


//Conacatination in string

var name = "Ayush";
var age = 20;

//conacatination
var text = "my name is " + name + " " + "i am " + " " + age + " years old!"

console.log(text);

//Templete literal or string or backticks
var text2 = `My name is ${name} and i am ${age} years old!`;
console.log(text2);

// length - return the number of charecter

var y = "Hello world!";

console.log(typeof y);

//length

var output = y.length;

//carAt() - return the charecter at specific index
output = y.charAt(3)

output = y[0];

//indexof - gives the first index of any chrecter

output = y.indexOf("e")

//trim - remove the white space for the string

output = y.trim();

//include - return true or false

output = y.includes("Hell")

//repleace - (one to be replace,  new value)
output = y.replace("Hello", "hii")

//substring - (string index, ending index)

output = y.substring(0, 5);
output = y.substring(4);

//slice - 
output = y.slice(0,5);

//uppercase and lowercase

output = y.toUpperCase();
output = y.toUpperCase();
console.log(output);
var first = "javascript";

first = first.charAt(0).toUpperCase()s