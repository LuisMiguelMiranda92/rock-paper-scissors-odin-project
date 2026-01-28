//Initialize global variables
let humanScore = 0;
let computerScore = 0;

// Create a function to randomly pick the computer choice (rock, paper, scissors)
function getComputerChoice() {
  // Create a random number between 0 and 1
  let randomNumber = Math.random();
  let computerChoice = "";
  // If that number is below 0.33 THEN we return "rock"
  if (randomNumber < 0.33) {
    computerChoice = "rock";
    //ELSE if the number is below 0.66 THEN we return "paper"
  } else if (randomNumber < 0.66) {
    computerChoice = "paper";
    //ELSE we return "scissors"
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

// Create a function that takes the user choice and returns it
function getUsersChoice() {
  //Ask the user for their choice and store it in a variable
  let userChoice = prompt("Rock, Paper or Scissors? What will it be?");
  console.log(userChoice);
  return userChoice;
}

// Create a function that plays a round, receives the user and the computer choices,
// updates the score and logs out a winner
function playRound(getComputerChoice, getUsersChoice) {
  let computer = getComputerChoice();
  let human = getUsersChoice();
  let roundWinner = "";
  if (
    (computer == "rock" && human == "paper") ||
    (computer == "paper" && human == "scissors") ||
    (computer == "scissors" && human == "rock")
  ) {
    roundWinner = "human";
    console.log(`human: ${human} vs computer: ${computer}, human`);
  } else if (
    (computer == "rock" && human == "scissors") ||
    (computer == "paper" && human == "rock") ||
    (computer == "scissors" && human == "paper")
  ) {
    roundWinner = "computer";
    console.log(`human: ${human} vs computer: ${computer}, computer`);
  } else {
    roundWinner = "tie";
    console.log(`human: ${human} vs computer: ${computer}, tie`);
  }
  return roundWinner;
}

// Create a function named playGame that calls playRound and plays 5 times.
// Keep updating the total scores and declare a winner
function playGame(playRound) {
  let humanScore = 0;
  let computerScore = 0;
  while (humanScore < 3 && computerScore < 3) {
    let roundWinner = playRound(getComputerChoice, getUsersChoice);
    if (roundWinner == "human") {
      humanScore += 1;
      console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);
    } else if (roundWinner == "computer") {
      computerScore += 1;
      console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);
    }
  }
  return humanScore > computerScore ? "You win" : "You lost";
}
