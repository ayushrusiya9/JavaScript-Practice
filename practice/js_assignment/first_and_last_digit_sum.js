let num = '76542'

function first_last_dig_sum(number){
    total_dig = number.length
    number = parseInt(number)
    divisor = 10 ** (total_dig - 1)
    first_digit = Math.floor(number / divisor)
    last_digit = number % 10
    sum = first_digit + last_digit
    return sum
}

console.log(first_last_dig_sum(num))