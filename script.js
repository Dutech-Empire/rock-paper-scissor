let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultDiv = document.querySelector("#result");
  const scoreDiv = document.querySelector("#score");

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

  // End game condition
  if (humanScore === 5) {
    resultDiv.textContent = `🎉 You win the game!`;
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = `😢 You lose the game!`;
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("button").forEach(button => button.disabled = true);
}

// Event listeners for buttons
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => playRound(button.id));
});
