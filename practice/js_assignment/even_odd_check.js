let num = parseInt(prompt('Enter number: '))

function even_odd_check(n){
    for(let i = 0; i < n; i ++){
        if(n % 2 == 0){
            console.log('Given nuber is even')
        }
        else{
            console.log("Given number is odd")
        }
    }
}

even_odd_check(num)