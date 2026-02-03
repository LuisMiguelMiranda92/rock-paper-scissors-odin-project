let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");
const buttonLabels = ["rock", "paper", "scissors"];

buttonLabels.forEach((label) => {
  const btn = document.createElement("button");

  btn.textContent = label;
  btn.className = "my-button-style";

  btn.addEventListener("click", () => {
    playRound(label);
  });

  container.appendChild(btn);
});

const scores = document.createElement("div");
scores.id = "scores";
const scoreCard = document.createElement("h2");
const roundCard = document.createElement("p");
container.appendChild(scores);
scores.appendChild(scoreCard);
scores.appendChild(roundCard);

function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  let roundWinner = "";
  if (
    (computerChoice == "rock" && userChoice == "paper") ||
    (computerChoice == "paper" && userChoice == "scissors") ||
    (computerChoice == "scissors" && userChoice == "rock")
  ) {
    roundWinner = "human";
    console.log(`human: ${userChoice} vs computer: ${computerChoice}, human`);
  } else if (
    (computerChoice == "rock" && userChoice == "scissors") ||
    (computerChoice == "paper" && userChoice == "rock") ||
    (computerChoice == "scissors" && userChoice == "paper")
  ) {
    roundWinner = "computer";
    console.log(
      `human: ${userChoice} vs computer: ${computerChoice}, computer`,
    );
  } else {
    roundWinner = "tie";
    console.log(`human: ${userChoice} vs computer: ${computerChoice}, tie`);
  }

  if (roundWinner == "human") {
    humanScore += 1;
    console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);
  } else if (roundWinner == "computer") {
    computerScore += 1;
    console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);
  }

  updateScoreCard();
  roundCard.textContent = `human: ${userChoice} vs computer: ${computerChoice}`;

  return roundWinner;
}

function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice = "";
  if (randomNumber < 0.33) {
    computerChoice = "rock";
  } else if (randomNumber < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function updateScoreCard() {
  scoreCard.textContent = `Human: ${humanScore} vs Computer: ${computerScore}`;
  const winner = document.createElement("h1");
  scores.appendChild(winner);

  if (humanScore == 5) {
    winner.textContent = "You won!!";
  } else if (computerScore == 5) {
    winner.textContent = "You lost!!";
  }
}
