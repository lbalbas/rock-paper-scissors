const resultList = {
	paper: {
		scissors: false,
		rock: true,
		image: '<span><img src="images/icon-paper.svg" alt="Paper" /></span>',
	},
	rock: {
		paper: false,
		scissors: true,
		image: '<span><img src="images/icon-rock.svg" alt="Rock" /></span>',
	},
	scissors: {
		rock: false,
		paper: true,
		image: '<span><img src="images/icon-scissors.svg" alt="Scissors" /></span>',
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
}

function displayResult(text) {
	hide(movesChooseCont);
	unhide(pickedContainer);

	document.getElementById("result").innerHTML = text;

	showPicks();
	delay(() => {
		updateScore();
		unhide(resultContainer);
	}, 2500);
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
	}, time);
}
function showPicks() {
	delay(() => {
		document.getElementById("playerMove").classList.add(playerMove);
		document.getElementById("playerMove").innerHTML =
			resultList[playerMove].image;
	}, 500);
	delay(() => {
		document.getElementById("houseMove").classList.add(houseMove);
		document.getElementById("houseMove").innerHTML =
			resultList[houseMove].image;
	}, 1500);
}
function newGame() {
	document.getElementById("playerMove").classList.remove(playerMove);
	document.getElementById("playerMove").innerHTML = "";
	document.getElementById("houseMove").innerHTML = "";
	document.getElementById("houseMove").classList.remove(houseMove);

	hide(pickedContainer);
	hide(resultContainer);
	unhide(movesChooseCont);
}
