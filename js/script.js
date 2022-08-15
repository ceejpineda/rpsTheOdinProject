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

function end(){

    if(yourScore == 5){
        Swal.fire({
            title: 'Victory!',
            confirmButtonText:'Play Again?',
            text: 'You have beaten the Computer!',
            imageUrl: './images/win.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              location.reload();
            }
          })
        }if(compScore == 5){
        Swal.fire({
            title: 'Defeat!',
            confirmButtonText:'Play Again?',
            text: 'You have been beaten by the computer!',
            imageUrl: './images/lose.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          })
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
    if(y == "rock"){
        document.getElementById("imgComputer").src="./images/rockstie.png";
        document.getElementById("imgPlayer").src="./images/rockstie.png";
        document.getElementById("imgComputer").style.visibility="visible";
        document.getElementById("imgPlayer").style.visibility="visible";
    }else if(y == "paper")
    {
        document.getElementById("imgComputer").src="./images/paperwin.png";
        document.getElementById("imgPlayer").src="./images/rocksloss.png";
        document.getElementById("imgComputer").style.visibility="visible";
        document.getElementById("imgPlayer").style.visibility="visible";
    }else if(y == "scissors")
    {
        document.getElementById("imgComputer").src="./images/scissorsloss.png";
        document.getElementById("imgPlayer").src="./images/rockswin.png";
        document.getElementById("imgComputer").style.visibility="visible";
        document.getElementById("imgPlayer").style.visibility="visible";
    }
    playRound(x,y);
    playerScore.innerHTML = yourScore;
    computerScore.innerHTML = compScore;
    end();
})
pButton.addEventListener("click", function(){
    x = "paper";
    y = getComputerChoice();
    if(y == "rock"){
        document.getElementById("imgComputer").src="./images/rocksloss.png";
        document.getElementById("imgPlayer").src="./images/paperwin.png";
        document.getElementById("imgComputer").style.visibility="visible";
        document.getElementById("imgPlayer").style.visibility="visible";
    }else if(y == "paper")
    {
        document.getElementById("imgComputer").src="./images/papertie.png";
        document.getElementById("imgPlayer").src="./images/papertie.png";
        document.getElementById("imgComputer").style.visibility="visible";
        document.getElementById("imgPlayer").style.visibility="visible";
    }else if(y == "scissors")
    {
        document.getElementById("imgComputer").src="./images/scissorswin.png";
        document.getElementById("imgPlayer").src="./images/paperloss.png";
        document.getElementById("imgComputer").style.visibility="visible";
        document.getElementById("imgPlayer").style.visibility="visible";
    }
    playRound(x,y);
    playerScore.innerHTML = yourScore;
    computerScore.innerHTML = compScore;
    end();
})
sButton.addEventListener("click", function(){
    x = "scissors";
    y = getComputerChoice();
    if(y == "rock"){
        document.getElementById("imgComputer").src="./images/rockswin.png";
        document.getElementById("imgPlayer").src="./images/scissorsloss.png";
        document.getElementById("imgComputer").style.visibility="visible";
        document.getElementById("imgPlayer").style.visibility="visible";
    }else if(y == "paper")
    {
        document.getElementById("imgComputer").src="./images/paperloss.png";
        document.getElementById("imgPlayer").src="./images/scissorswin.png";
        document.getElementById("imgComputer").style.visibility="visible";
        document.getElementById("imgPlayer").style.visibility="visible";
    }else if(y == "scissors")
    {
        document.getElementById("imgComputer").src="./images/scissorstie.png";
        document.getElementById("imgPlayer").src="./images/scissorstie.png";
        document.getElementById("imgComputer").style.visibility="visible";
        document.getElementById("imgPlayer").style.visibility="visible";
    }
    playRound(x,y);
    playerScore.innerHTML = yourScore;
    computerScore.innerHTML = compScore;
    end();
})

