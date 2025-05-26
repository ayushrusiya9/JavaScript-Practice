let word = prompt("Enter any word: ")

const sorted_string = (w) => {
    let sorted =  w.split('').sort().join('')
    return sorted
}

const sort = sorted_string(word)
console.log(sort)
