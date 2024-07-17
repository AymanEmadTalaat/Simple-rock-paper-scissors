// A prompt message will appear asking the player to choose between Rock/Paper/Scissors
// The computer choice will be randomly choosen between the three options
// There will be five rounds, after each round the winner will be announced
// After the game ends, the score will be announced declaring the winner

let humanScore = 0;
let computerScore = 0;

const computerChoiceArr = ["Rock", "Paper", "Scissors"];
let computerChoice;

let promtValue;

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * computerChoiceArr.length);
}

function getHumanChoice() {
  promtValue = prompt("Enter your Weapon! Rock / Paper / Scissors");
}

function playRound(value1, value2) {
  if (value1 === "Rock" && value2 === "Paper") {
    console.log("You lose, Paper beats Rock");
    computerScore += 1;
  } else if (value1 === "Rock" && value2 === "Scissors") {
    console.log("You win, Rock beats Scissors");
    humanScore += 1;
  } else if (value1 === "Rock" && value2 === "Rock") {
    console.log("It's a tie");
  } else if (value1 === "Paper" && value2 === "Scissors") {
    console.log("You lose, Scissors beats Paper");
    computerScore += 1;
  } else if (value1 === "Paper" && value2 === "Paper") {
    console.log("It's a tie");
  } else if (value1 === "Paper" && value2 === "Rock") {
    console.log("You win, Paper beats Rock");
    humanScore += 1;
  } else if (value1 === "Scissors" && value2 === "Rock") {
    console.log("You lose, Rock beats Scissors");
    computerScore += 1;
  } else if (value1 === "Scissors" && value2 === "Paper") {
    console.log("You win, Scissors beats Paper");
    humanScore += 1;
  } else if (value1 === "Scissors" && value2 === "Scissors") {
    console.log("It's a tie");
  }
}

function playGame() {
  getComputerChoice();
  getHumanChoice();
  playRound(promtValue, computerChoiceArr[computerChoice]);

  if (humanScore > computerScore) {
    console.log("Player wins!");
    console.log(humanScore, computerScore);
  } else if (humanScore < computerScore) {
    console.log("Player loses, Game over");
    console.log(humanScore, computerScore);
  } else if (humanScore === computerScore) {
    console.log("It's a tie, Nobody won!");
    console.log(humanScore, computerScore);
  }
}

playGame();
