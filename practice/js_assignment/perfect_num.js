let num = parseInt(prompt("Enter number: "))
// let num = 6

perfect_number = (n)=> {
    sum = 0
    for(let i = 0; i < n; i++){
        if(n % i == 0){
            sum = sum + i
        }
    }

    return sum
}

let perfect = perfect_number(num)

if(perfect == num ){
    console.log(`${num} is perfect number.`)
}
else{
    console.log(`${num} is not perfect num`)
}