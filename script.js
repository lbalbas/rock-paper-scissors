const resultList = {
	paper: {
		scissors: false,
		rock: true,
	},
	rock: {
		paper: false,
		scissors: true,
	},
	scissors: {
		rock: false,
		paper: true,
	},
};

var userScore = 0;

var pickedContainer = document.getElementById("pickedContainer");
var movesChooseCont = document.getElementById("movesCont");
var resultContainer = document.getElementById("resultContainer");
var playerMove;
var houseMove;

document.getElementById("scissors").addEventListener("click", startGame);
document.getElementById("paper").addEventListener("click", startGame);
document.getElementById("rock").addEventListener("click", startGame);

function startGame() {
	playerMove = this.id;
	houseMove = getHouseMove();
	result = checkResult(playerMove, houseMove);
	finishGame(result);
}

function getHouseMove() {
	var randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
	switch (randomNumber) {
		case 1:
			return "paper";
		case 2:
			return "rock";
		case 3:
			return "scissors";
	}
}

function checkResult(playerMove, houseMove) {
	if (playerMove === houseMove) {
		return 0;
	} else {
		return resultList[playerMove][houseMove];
	}
}

function finishGame(result) {
	switch (result) {
		case 0:
			displayResult("TIE");
			break;
		case true:
			userScore++;
			displayResult("YOU WIN");
			break;
		case false:
			userScore--;
			displayResult("YOU LOSE");
			break;
	}
	updateScore();
}

function displayResult(text) {
	hide(movesChooseCont);
	unhide(pickedContainer);
	document.getElementById("result").innerHTML = text;

	showPicks();
	delay(() => unhide(resultContainer), 5000);
}

function updateScore() {
	document.getElementById("score-count").innerHTML = userScore;
}

function hide(element) {
	element.classList.add("hidden");
}

function unhide(element) {
	element.classList.remove("hidden");
}
function delay(fnc, time) {
	setTimeout(() => {
		fnc();
		console.log("Hi");
	}, time);
}
function showPicks() {}
