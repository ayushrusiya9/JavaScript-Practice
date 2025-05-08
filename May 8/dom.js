let heading = document.getElementById("demo")

heading.innerHTML = "Hello world!"

let parent = document.getElementById("parent")

parent.innerHTML = `<h1> Helllo from js </h1>`

let l = document.getElementById("burger")

// l.src = "/thailandimage.jpg";

// changing style

heading.style.color = "blue"
heading.style.fontSize = "90px"


//date

parent.innerHTML = new Date()

// write

document.write("helllo dirct")
document.write("<h1>" + "with tag" + "</h1>")