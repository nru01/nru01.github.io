var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

var links = document.getElementsByClassName("img-link");

for (var i=0; i<links.length; i++) {
	links[i].addEventListener("click", picLink);
}


console.log(numOne.value);
numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
	var one = parseFloat(numOne.value)||0;
	var two = parseFloat(numTwo.value)||0;
	addSum.innerHTML = "sum: "+(one+two);
}
function picLink() {
	var pic = document.getElementById(this.getAttribute["data-link"].value);
	console.log(pic);
	console.log(this.getAttribute["data-link"].value);
}