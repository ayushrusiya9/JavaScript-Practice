//function
function display() {
    console.log("hello")
}

display();


//no return with perameter

function add(num1, num2){ //banate time jo declear krte hai usko perameter
    console.log(num1 + num2)
}

add(12,23)//call krte time jo value lete hai usko argument bolte hai

//return with perametr

function multiply(num1,num2){
    return num1 * num2
}

let result = multiply(23,32)
console.log(result)


//fourth type return pera with no perameter

// function show(){
//     return 'Hello!'
// }

// let l = show();
// console.log(l)

function cube(num){
    return num * num * num
}

// let c = cube(parseInt(prompt("enter number")))
// console.log(c)


let squere = function(n){
    return n * n;
}

console.log(squere(2))

//arrow function

const print = (name) => {
    console.log(name)
};

print("harry potter")