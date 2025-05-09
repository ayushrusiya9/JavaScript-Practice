// let heading = document.getElementById("demo")
// heading1 = document.getElementsByClassName("demo")
// heading3 = document.getElementsByTagName("h1")
// heading = document.querySelector("#demo")

// let headin3 = document.querySelectorAll("#demo")
// headin3[0].innerHTML = "hello"

// heading.style.color = "red"
// heading.style.backgroundColor = "yellow"

// heading.style.cssText = "color:red; backgroundColor = "
// console.log(heading)

// function change() {
//     let head = document.getElementById("demo")
//     head.style.cssText = "border: 5px solid red; backgroundColor: blue; color: "
// }

// function change1() {
//     let bhopal = document.getElementById("myinput").value;
//     // bhopal.value = "indore"
//     headin3.innerHTML = "indore"
// }

function display() {
    let input = document.getElementById("newinput").textContent;
    let ch = document.getElementById("change").innerHTML;
    ch.innerHTML = input;
}