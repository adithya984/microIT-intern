document.addEventListener('DOMContentLoaded', () => {
    // Get HTML elements
    const playerScoreSpan = document.getElementById('player-score');
    const computerScoreSpan = document.getElementById('computer-score');
    const playerChoiceSpan = document.getElementById('player-choice');
    const computerChoiceSpan = document.getElementById('computer-choice');
    const resultMessage = document.getElementById('result-message');
    const choiceButtons = document.querySelectorAll('.choice-btn'); // Select all buttons with this class
    const resetBtn = document.getElementById('reset-btn');

    // Game variables
    let playerScore = 0;
    let computerScore = 0;
    const choices = ['rock', 'paper', 'scissors']; // Array of possible choices

    // Function to generate computer's choice
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to determine the winner
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            playerScore++;
            return 'You win!';
        } else {
            computerScore++;
            return 'You lose!';
        }
    }

    // Function to update the display
    function updateDisplay(playerChoice, computerChoice, result) {
        playerChoiceSpan.textContent = playerChoice;
        computerChoiceSpan.textContent = computerChoice;
        resultMessage.textContent = result;

        // Update score display
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;

        // Apply result-specific styling to the message
        resultMessage.classList.remove('win', 'lose', 'draw'); // Clear previous classes
        if (result.includes('win')) {
            resultMessage.classList.add('win');
        } else if (result.includes('lose')) {
            resultMessage.classList.add('lose');
        } else {
            resultMessage.classList.add('draw');
        }

        // Show reset button after a few rounds or if scores reach a certain point (optional)
        // For simplicity, let's just show it after every round here
        resetBtn.classList.remove('hidden');
    }

    // Function to handle a player's choice
    function playGame(playerSelectedChoice) {
        const computerSelectedChoice = getComputerChoice();
        const result = determineWinner(playerSelectedChoice, computerSelectedChoice);
        updateDisplay(playerSelectedChoice, computerSelectedChoice, result);
    }

    // Add event listeners to choice buttons
    choiceButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const playerSelectedChoice = event.target.id; // Get the ID (rock, paper, or scissors) of the clicked button
            playGame(playerSelectedChoice);
        });
    });

    // Function to reset the game
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        playerScoreSpan.textContent = '0';
        computerScoreSpan.textContent = '0';
        playerChoiceSpan.textContent = '';
        computerChoiceSpan.textContent = '';
        resultMessage.textContent = 'Let\'s Play!';
        resultMessage.classList.remove('win', 'lose', 'draw');
        resetBtn.classList.add('hidden'); // Hide reset button again
    }

    // Add event listener to reset button
    resetBtn.addEventListener('click', resetGame);
});