var playerOne = document.querySelector("#playerOne");
var reset = document.querySelector("#reset");
var playerTwo = document.querySelector("#playerTwo");
var p1Score = document.querySelector("span");
var p2Score = document.querySelector("#p2score")
var score1 = 0;
var score2 = 0;


playerOne.addEventListener("click", function(){
	score1 ++;
	p1Score.textContent = score1;

})

playerTwo.addEventListener("click", function(){
	score2 ++;
	p2Score.textContent = score2;

})

reset.addEventListener("click", function(){
	alert("clicked");

})