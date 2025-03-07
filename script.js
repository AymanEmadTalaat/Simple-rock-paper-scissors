// A prompt message will appear asking the player to choose between Rock/Paper/Scissors
// The computer choice will be randomly choosen between the three options
// There will be five rounds, after each round the winner will be announced
// After the game ends, the score will be announced declaring the winner
const container = document.querySelector(".container");
let humanScore = 0;
let computerScore = 0;

const computerChoiceArr = ["Rock", "Paper", "Scissors"];
let computerChoice;

let promtValue;

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * computerChoiceArr.length);
}

function getHumanChoice() {
  alert(`You chose ${promtValue}`);
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
  const div = document.createElement("div");
  div.style.cssText = "text-align: center; font-size: 5em; margin-top: -3em;";
  document.body.insertBefore(div, container);

  container.addEventListener("click", (e) => {
    let target = e.target;

    if (target.id === "1") {
      promtValue = "Rock";
      getHumanChoice();
      getComputerChoice();
      playRound(promtValue, computerChoiceArr[computerChoice]);
    } else if (target.id === "2") {
      promtValue = "Paper";
      getHumanChoice();
      getComputerChoice();
      playRound(promtValue, computerChoiceArr[computerChoice]);
    } else if (target.id === "3") {
      promtValue = "Scissors";
      getHumanChoice();
      getComputerChoice();
      playRound(promtValue, computerChoiceArr[computerChoice]);
    }

    div.textContent = `${humanScore} ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
      console.log("The game is over");
      if (humanScore > computerScore) {
        console.log("Player wins!!");
      } else if (computerScore > humanScore) {
        console.log("You loose!!");
      } else {
        console.log("It's a tie!, Nobody Won!!!");
      }
      document.getElementById("1").disabled = true;
      document.getElementById("2").disabled = true;
      document.getElementById("3").disabled = true;
    }
  });
}

playGame();
