let score = 0;
let isOut = false;

const buttons = document.querySelectorAll('.choice-btn');
const gameStatus = document.getElementById('game-status');
const scoreDisplay = document.getElementById('score-display');
const resetBtn = document.getElementById('resetBtn');

// Event listener for each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (isOut) return;

        const playerChoice = parseInt(button.dataset.number);
        const computerChoice = Math.floor(Math.random() * 6) + 1;

        if (playerChoice === computerChoice) {
            gameStatus.textContent = `Out! You and the computer both chose ${playerChoice}. Your final score is ${score}.`;
            isOut = true;
        } else {
            score += playerChoice;
            gameStatus.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. Keep going!`;
            scoreDisplay.textContent = `Score: ${score}`;
        }
    });
});

// Reset game
resetBtn.addEventListener('click', () => {
    score = 0;
    isOut = false;
    gameStatus.textContent = '';
    scoreDisplay.textContent = `Score: ${score}`;
});
