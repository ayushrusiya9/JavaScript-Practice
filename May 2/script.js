// let person = {
//     name  : 'AYUSH',
//     age : 21,
//     city: "bhopl"
// }

// //object convert to json
// const data = JSON.stringify(person);

// console.log(person)
// console.log(data)


// //json string to object 

// const mydata = JSON.parse(data)
// console.log(mydata)

// const library = [{title: "nobel"},{author: "ayush"}, {status: { own: true, reading: false, read: false}}]

const library = [
    {
      title: "The Silent Code",
      author: "Ada Lovelace",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "JavaScript Chronicles",
      author: "Brendan Eich",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "The Debugging Mindset",
      author: "Grace Hopper",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  const libraryJSON = JSON.stringify(library);
  console.log(libraryJSON);
  const { title: firstBook } = library[0];
  console.log(firstBook); // Outputs: The Silent Code
  