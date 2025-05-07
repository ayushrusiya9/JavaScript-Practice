let user = {
    name : "ayush",
    age : 21,
    address: {
        city: "Bhopal",
        state: "M.P" 
    }
};

// console.log(user.address.city) //using dot notation

console.log(user["address"]["city"])