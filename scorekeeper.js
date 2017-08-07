var playerOne = document.querySelector("#playerOne");
var reset = document.querySelector("#reset");
var playerTwo = document.querySelector("#playerTwo");
var p1Score = document.querySelector("span");
var p2Score = document.querySelector("#p2score");
var scoreTracker = document.querySelector("#scoreTracker");
var numInput = document.querySelector("input[type='number']");
var score1 = 0;
var score2 = 0;
var scoreTracking = 0;
var gameOver = false;
var winningScore = 5;


playerOne.addEventListener("click", function(){
  if (!gameOver){
	score1 ++;
	console.log(score1, winningScore);
	if(score1 === winningScore){
		gameOver = true;
		p1Score.classList.add("winner");
	}
	p1Score.textContent = score1;
}

  });

playerTwo.addEventListener("click", function(){
	if (!gameOver){
	   score2 ++;
		if (score2 === winningScore){
			gameOver = true;
			p2Score.classList.add("winner");	
		}
		p2Score.textContent = score2;
	}
});

reset.addEventListener("click", function(){
	scoreReset();
});

numInput.addEventListener("change", function(){
	
	scoreTracker.textContent = this.value;
	winningScore = Number(this.value);
	scoreReset();
});

function scoreReset(){
	score1 = 0
	score2 = 0
	p1Score.textContent = score1;
	p2Score.textContent = score2;
	p1Score.classList.remove("winner");
	p2Score.classList.remove("winner");
	gameOver = false;

}




