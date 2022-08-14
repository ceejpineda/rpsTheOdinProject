var yourScore = 0;
var compScore = 0;

function getComputerChoice(){
    rps = ["rock","paper","scissors"];
    choice = Math.floor(Math.random()*rps.length);
    return rps[choice];
}

function playRound(playerSelection, computerSelection){
    x = playerSelection.toLowerCase();
    y = computerSelection;

    if(x == y){
        console.log("Tie");
    }else if (x == "rock" && y == "paper"){
        console.log("You Lose! Paper beats Rock");
        compScore++;
    }else if (x == "rock" && y == "scissors"){
        console.log("You Win! Rock beats Scissors");
        yourScore++;
    }else if (x == "paper" && y == "scissors"){
        console.log("You Lose! Scissors beats Paper");
        compScore++;
    }else if (x == "paper" && y == "rock"){
        console.log("You Win! Paper beats Rock");
        yourScore++;
    }else if (x == "scissors" && y == "rock"){
        console.log("You Lose! Rock beats Scissors");
        compScore++;
    }else if (x == "scissors" && y == "paper"){
        console.log("You Win! Scissors beats Paper");
        yourScore++;
    }
}

var rButton = document.getElementById("rButton");
var pButton = document.getElementById("pButton");
var sButton = document.getElementById("sButton");
var playerScore = document.getElementById("playerScore");
var computerScore = document.getElementById("computerScore");

rButton.addEventListener("click", function(){
    x = "rock";
    y = getComputerChoice();
    playRound(x,y);
    playerScore.innerHTML = yourScore;
    computerScore.innerHTML = compScore;
    win();
})
pButton.addEventListener("click", function(){
    x = "paper";
    y = getComputerChoice();
    playRound(x,y);
    playerScore.innerHTML = yourScore;
    computerScore.innerHTML = compScore;
    win();
})
sButton.addEventListener("click", function(){
    x = "scissors";
    y = getComputerChoice();
    playRound(x,y);
    playerScore.innerHTML = yourScore;
    computerScore.innerHTML = compScore;
    win();
})





