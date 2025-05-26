let num = parseInt(prompt("Enter number: "))

function factorial(n){
    fact = 1
    for(let i = 1; i <= n; i++){
        fact = fact * i
    }
    return fact
}

console.log(factorial(num))