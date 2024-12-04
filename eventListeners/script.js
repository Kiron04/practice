// Method 2
// const btn = document.querySelector("#method2-btn");
// btn.onclick = () => alert("Hello World");

// Method 3
// const method3_btn = document.querySelector("#method3_btn");
// method3_btn.addEventListener("click", () => {
    // alert("Hello World");
// });


// Using Fuctions Methods 1 - 3
// Method 1
// function alertFunction() {
//     alert("Yay you did it");
// }
// const btn = document.querySelector("#btn");

// Method 2
// btn.onclick = alertFunction;

// Method 3
// btn.addEventListener("click", alertFunction);


// e
// btn.addEventListener("click", function (e) {
//     console.log(e.target);
// });
// btn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
// });


// Attaching listeners to groups of nodes
// buttons is a node list.It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});