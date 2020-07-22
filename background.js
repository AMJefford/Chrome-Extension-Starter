//changes colour of element "demo" to red
function display(){
  var x = document.getElementById("demo");
  x.style.color = "red";
}

//adds event listener for button and calls function if clicked
document.getElementById("press").addEventListener("click", display);
