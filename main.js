const para = document.querySelector("p");
const form = document.getElementById("form");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const plays = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * plays.length);
  return plays[random];
}

// Please bear with me concerning the multiple console.log
function game() {
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Scissors") {
      console.log("player- ", (playerScore += 1));
      console.log("You win, rock beats scissors");
      return "You win, rock beats scissors";
    } else if (playerSelection == "rock" && computerSelection == "Rock") {
      console.log("Its a tie, rock cant beat rock");
      return "Its a tie, rock cant beat rock";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
      console.log("computer ", (computerScore += 1));
      console.log("You lose, paper beat rock");
      return "You lose, paper beat rock";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
      console.log("player -", (playerScore += 1));
      console.log("You win, paper beats rock");
      return "You win, paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
      console.log("computer - ", (computerScore += 1));
      console.log("You lose, scissors beats paper");
      return "You lose, scissors beats paper";
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
      console.log("Its a tie, paper cant beat paper");
      return "Its a tie, paper cant beat paper";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
      console.log("player - ", (playerScore += 1));
      console.log("You win, scissors cuts paper");
      return "You win, scissors cuts paper";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
      console.log("computer - ", (computerScore += 1));
      console.log("You lose, rock beats scissors");
      return "You lose, rock beats scissors";
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "Scissors"
    ) {
      console.log("Its a tie, scissors can beat scissors");
      return "Its a tie, scissors can beat scissors";
    } else {
      console.log("this is not the expected input");
      return "this is not the expected input";
    }
  }
  var userPick = prompt("what is your pick");
  para.innerHTML = playRound(userPick, computerPlay());
}
for (i = 0; i < 5; i++) {
  game();
}

if (playerScore > computerScore) {
  para.innerHTML = `${playerScore} - ${computerScore} Yayy you win the game.`;
  console.log(`${playerScore} - ${computerScore} You win the game.`);
} else if (playerScore < computerScore) {
  para.innerHTML = `${playerScore} - ${computerScore} You lose the game, try again.`;
  console.log(`${playerScore} - ${computerScore} You lose the game.`);
} else if (playerScore === computerScore) {
  para.innerHTML = `${playerScore} - ${computerScore} its a tie.`;
  console.log(`${playerScore} - ${computerScore} Its a tie.`);
}
