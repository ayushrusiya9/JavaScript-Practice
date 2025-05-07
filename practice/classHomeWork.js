// waf to print febonaci series given range like 20

// 
// function feb(value){
//     let a = 0, b = 1;
//     for(let i = 1; i <= value; i++){
//         console.log(a)
//         let c = a + b;
//         a = b;
//         b = c;
//     }
// }

let feb = (value) => {
    let a = 0, b = 1;
    for (let i = 1; i <= value; i++) {
        console.log(a)
        let c = a + b;
        a = b;
        b = c;
    }
}


// feb(10);



// waf to print odd number bt 1 to 100 and same even 2 to 200
// let odd = function () {
//     for (let i = 1; i <= 100; i = i + 2) {
//         console.log(i)
//     }
// }

// let odd = ()=>{
//     for(let i = 1; i <= 100; i = i + 2){
//         console.log(i)
//     }
// }

// odd()


//even

// let even = () => {
//     for (let i = 0; i <= 200; i = i + 2) {
//         console.log(i)
//     }
// }

(function() {
    for(let i = 0; i <= 200; i = i + 2){
        console.log(i)
    }
})();

// even()