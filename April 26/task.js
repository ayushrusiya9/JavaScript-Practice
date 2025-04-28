//wap take 10 input from the user and print without bracket 

let ar = []

for(let i = 0; i < 10; i++){
   ar[i] = parseInt(prompt("enter 10 number"))
}
console.log(ar)
ar.slice(4,7)
console.log(ar)

for(let i = 0; i <= 3; i++){
    console.log(ar[i])
    if(i % 2 != 0){
        console.log("odd")
    }else{
        console.log("even")
    }
}