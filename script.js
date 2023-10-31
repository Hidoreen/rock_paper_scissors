
const buttons = document.querySelectorAll('.btn');
const resultsText = document.querySelector('.results');
const playerScore = document.querySelector('.playerscore');
const computerScore = document.querySelector('.computerscore');
//const playRounds = document.querySelector('.playRounds');
const resetButton = document.querySelector('.restartBtn');

let player;
let computer;


buttons.forEach(button => {
    button.addEventListener('click', () => {
        player = button.value;
        computer = getComputerChoice();

        playerScore.textContent = `Player: ${player}`;
        computerScore.textContent = `Computer: ${computer}`;
        resultsText.textContent = getResults();
    })
})

function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors']
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
    }

    function getResults() {
        if (player === computer) {
            return `It's a tie`;
        } else if (
            (player === 'Rock' && computer === 'Scissors') ||
            (player === 'Scissors' && computer === 'Paper') ||
            (player === 'Paper' && computer === 'Rock')
        ) {
            return `You Won!`;
        } else {
            return `You lost!`;
        }
    }

    function resetGame(){
        playerScore.textContent = '';
        computerScore.textContent = '';
        resultsText.textContent = '';
    }

    resetButton.addEventListener('click', () => resetGame());
