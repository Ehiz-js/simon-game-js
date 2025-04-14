let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).click(function () {
	if (!started) {
		$("h1").text("Level" + " " + level);
		nextSequence();
		started = true;
	}
});

function nextSequence() {
	userClickedPattern = [];
	$("h1").text("Level" + " " + level);
	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	animatePress(randomChosenColor);
	playSound(randomChosenColor);
	level++;
}

$(".btn").click(function () {
	let userChosenColor = $(this).attr("id");
	userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
	animatePress(userChosenColor);
	checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
	switch (name) {
		case "green":
			let greenAudio = new Audio("./sounds/green.mp3");
			greenAudio.play();
			break;
		case "red":
			let redAudio = new Audio("./sounds/red.mp3");
			redAudio.play();
			break;
		case "yellow":
			let yellowAudio = new Audio("./sounds/yellow.mp3");
			yellowAudio.play();
			break;
		case "blue":
			let blueAudio = new Audio("./sounds/blue.mp3");
			blueAudio.play();
			break;

		default:
			let wrongAudio = new Audio("./sounds/wrong.mp3");
			wrongAudio.play();
			break;
	}
}

function animatePress(currentColor) {
	$("#" + currentColor).addClass("pressed");
	setTimeout(function () {
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}

function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		playSound("wrong");
		$("body").addClass("game-over");
		$("h1").text("Game Over, Press Any Key To Restart");
		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 200);

		setTimeout(startOver, 1000);
	}
}

function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
}
