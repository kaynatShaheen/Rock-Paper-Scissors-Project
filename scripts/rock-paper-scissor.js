
let score = JSON.parse(localStorage.getItem('score'));

/* here when score object is removed, it gives null which is a false value
/so !score in that case will be true. !score gives the same value as score === null */
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

updateScoreElement();

function playGame(playerMove) {
        const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissor') {
            if (computerMove === 'rock') {
            result = 'You lose!';
        } else if (computerMove === 'paper') {
            result = 'You win!';
        } else {
            result = 'Tie :D';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!';
        } else if (computerMove === 'paper') {
            result = 'Tie :D';
        } else {
            result = 'You lose!';
        }
        
    } else {
        if (computerMove === 'rock') {
            result = 'Tie :D';
        } else if (computerMove === 'paper') {
            result = 'You lose!';
        } else {
            result = 'You win!';
        }
    }

    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose!') {
        score.losses += 1;
    } else {
        score.ties +=1 ;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    updateMovesResult();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You picked
        <img src="images/${playerMove}.png"
            class="move"
        >
        <img src="images/${computerMove}.png" 
            class="move"
        > Computer picked `

}

function updateMovesResult() {
    document.querySelector('.js-result')
        .innerHTML = ``

    document.querySelector('.js-moves')
        .innerHTML = ``
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}


function pickComputerMove() {

    const randomNumber = Math.random();
    let computerMove = '';    

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissor';
    }

    return computerMove;
}