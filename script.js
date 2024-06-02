// This is a simple rock - paper - scissors game, that let you enter one of the three options and then the computer choice will be randomized, after that the winner will be logged out, in a game of five rounds //
// For some reason on google the crash, but for example on Opera it doesn't//

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
  const gameRounds = 5;
  for (let i = 1; i <= gameRounds; i++) {
    getComputerChoice();
    getHumanChoice();
    playRound(promtValue, computerChoiceArr[computerChoice]);
  }

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
