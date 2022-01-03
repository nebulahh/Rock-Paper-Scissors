const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const comp = document.getElementById("comp");
const player = document.getElementById("player");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const restart = document.getElementById("restart");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const plays = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * plays.length);
  return plays[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    player.textContent = `Player- ${(playerScore += 1)}`;
    result.textContent = `You win, rock beats scissors`;
  } else if (playerSelection == "Rock" && computerSelection == "Rock") {
    result.textContent = `Its a tie, rock cant beat rock`;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    comp.textContent = `Computer - ${(computerScore += 1)}`;
    result.textContent = `You lose, paper beat rock`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    player.textContent = `Player - ${(playerScore += 1)}`;
    result.textContent = `You win, paper beats rock`;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    comp.textContent = `Computer - ${(computerScore += 1)}`;
    result.textContent = `You lose, scissors beats paper`;
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    result.textContent = `Its a tie, paper cant beat paper`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    player.textContent = `Player - ${(playerScore += 1)}`;
    result.textContent = `You win, scissors cuts paper`;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    comp.textContent = `Computer - ${(computerScore += 1)}`;
    result.textContent = `You lose, rock beats scissors`;
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    result.textContent = `Its a tie, scissors can beat scissors`;
  } else {
    restart.addEventListener("click", replay);
  }
}

function value(e) {
  playRound(e.target.textContent, computerPlay());
  if (playerScore == 5 || computerScore == 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
  if (playerScore == 5) {
    result.textContent = "You Win";
  } else if (computerScore == 5) {
    result.textContent = "You Lose";
  }
}

buttons.forEach((button) => button.addEventListener("click", value));

function replay() {
  window.location.reload();
}
