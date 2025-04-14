let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

$(document).one("keydown", function () {
	nextSequence();
});

function nextSequence() {
	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	let randomButton = $("#" + randomChosenColor);
	animatePress(randomChosenColor);
	playSound($(randomButton).attr("id"));
	$("h1").text("Level" + " " + level);
	level++;
}

for (i = 0; i < buttonColors.length; i++) {
	$("#" + buttonColors[i]).click(function () {
		let buttonId = $(this).attr("id");
		animatePress(buttonId);
		playSound(buttonId);
		handler(buttonId);
	});
}
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

function handler(buttonId) {
	let userChosenColor = buttonId;
	userClickedPattern.push(userChosenColor);
	console.log(userClickedPattern);
}

function checkAnswer() {}
