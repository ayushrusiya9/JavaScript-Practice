let person = {
    name: "ayush",
    iseligible: true,
    age:20,
    address: {
        state: "MP"
    },
    hobby: ['dance',"sport"],
    hello: function(){
        console.log("Hello")
    }
};

console.log(person.age)
console.log(person['age'])
console.log(person.address.state)

//update valus

person.iseligible = false
console.log(person)


//add new values
person.address.city = 'Bhopal'
console.log(person)

//add function in object 
person.display = function(){
    console.log('Hello Duniya!')
}

console.log(person)

//spreed operater is part of copy or array and obj

let obj1 = {
    a:1,
    b:2
}

let obj2 = {
    c:3,
    d:4
}

// let obj3 = {...obj1}
let obj3 = {...obj1,...obj2}
console.log(obj3)

//array of object
let a = [
    {name: "goli",age: 400},
    {name: "sonu",age: 40},
    {name: "babita",age: 43},
    {name: "jethalal",age: 32},
];

console.log(a[1].name)
console.log(a[3].name + " " + a[3].age)
console.log(`${a[3].name} ${a[3].age}`)




//destructuring with spread operater
//destructuring in array and obj
const arr = [1,2,3,4,5,6,7,8,9]
// let a = arr[0]
// let b = arr[1]

const [c,d,e,f, ...rest] = arr;
console.log(`${c} ${d} ${e} ${f}`)
console.log(`${rest}`)


//destructuring obj
const car = {
    color: "blue",
    model:"bmw",
    year:2022
};

//let y =  car.color;
//let z = car.model;
//same name as property

const {color, model, year} =car;

console.log(`${color} ${model} ${year}`)

const {color:x, model:y, year:z} = car;

console.log(`${x} ${y} ${z}`)