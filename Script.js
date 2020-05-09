var message = "Your external javascript is connected";

console.log(message);
// alert(message);

// var name = prompt("Please enter your name", "name goes here")

// Function Declaration
function sayHello(){
  // alert("Hello " + name);
  console.log("Hello " + name);
  document.write("Hello " + name);
}

//Function Call
sayHello(name);

var firstDiv =
document.getElementById("moveableDiv")

var secondDiv =
document.getElementById("animateableDiv")

function moveObject() {
  console.log("move things");
  firstDiv.style.transform =
  "translateY(250px)";
  secondDiv.style.animation =
  "quickAnimation 3s linear 3 alternate forwards";
  console.log("second div should animate")
}

function rotateObject() {
  firstDiv.style.transform =
  "rotate(180deg)";
  secondDiv.style.transform =
  "rotate(180deg)";
}

function changeColor() {
  document.body.style.animation = "colorAnimation 5s linear infinite normal forwards";
}
