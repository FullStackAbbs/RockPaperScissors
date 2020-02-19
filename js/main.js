
// OUR VERSION
// Sets score to zero and gives value to user clicked button
var botScore=0;
var	playerScore=0;
var playerThrowsRock;
var playerThrowsPaper;
var playerThrowsScissors;

document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

function playerThrowsRock(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsPaper(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}

function playerThrowsScissors(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}

function getRandomWeapon(){
	var randomNumber=Math.random();
	// the math function takes a random number from 0  and 1
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon = "scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon = "paper";
	}
	return botsWeapon;
}

// switch (Expression){
// 	case playerThrowsRock && increaseBotScoreWeapon==="scissors"
// 	playerScore ++;
// 	console.log(" User wins !!")
// 	case
//
// }


//  This is how the winners be evaluted from user and bot inputs


function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon===playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon==="scissors" && playersWeapon==="paper") ||
		(botsWeapon==="paper" && playersWeapon==="rock") ||
		(botsWeapon==="rock" && playersWeapon==="scissors")
	){
		increaseBotScore();
	}
	else{increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage('Ayeeeee, you won !')
}
// matching table id must match element id above human

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
// create new div function display(botmsg)element selector
