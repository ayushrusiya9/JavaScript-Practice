let num = parseInt(prompt("Enter number: "))

function prime_check(n){
    if(n == 1){
        return false
    }

    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return false
        }
    }

    return true
}

let prime = prime_check(num)

if (prime == true){
    console.log(`Given ${num} is prime`)
}
else{
    console.log(`Given ${num} is not prime`)
}