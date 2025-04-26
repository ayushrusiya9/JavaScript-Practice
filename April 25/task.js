// let cal = parseFloat(prompt("Enter celcius"))

// let Far = (cal * 9/5) + 32
// console.log(Far)

//User se do input lena h name and password (4 digit ka hona chahiye) 
// agr shi h to Success aana chahiye nhi to Fail
let name = prompt("Enter your name: ")

if(name == "Ayush" || name == "ayush"){
    let password = parseInt(prompt("Enter password: "))
   if(password > 1000 && password < 9999){
       if(password == 1111){
          console.log("Success!")
       }
       else{
        console.log("Wrong Password, Fail!")
       }
   }
   else{
    console.log("Invalid Password!")
   }
}
else{
    console.log("Invalid name!")
}