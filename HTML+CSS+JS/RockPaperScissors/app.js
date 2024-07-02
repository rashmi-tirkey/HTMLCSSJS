let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const paraMessage = document.querySelector('#msg');
const userScorePara = document.querySelector('#users-score');
const compScorePara = document.querySelector('#comp-score');

// generate computer choice

const generateCompChoice = () => {  
    const compChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return compChoices[randomNum];

}

const showWinner = (userWin, userChoiceId, compChoices) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        paraMessage.innerText = `You win! Your ${userChoiceId} beats ${compChoices}`;
        paraMessage.style.backgroundColor = 'green';
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        paraMessage.innerText = `You lose! Your ${compChoices} beats ${userChoiceId}`;
        paraMessage.style.backgroundColor = 'red';
    }
}

const playGame = (userChoiceId) => {
    const compChoices = generateCompChoice();
    if(userChoiceId === compChoices) {
        paraMessage.innerText = 'You was drow the game, try again!';
        paraMessage.style.backgroundColor = '#081b31';
    } else {
        userWin = true;
        if(userChoiceId === 'rock'){
            userWin = compChoices === 'paper' ? false : true;
        }else if(userChoiceId === 'paper'){
            userWin = compChoices === 'scissors' ? false : true;
        }else{
            userWin = compChoices === 'rock' ? false : true;
        }

        showWinner(userWin, userChoiceId, compChoices);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoiceId = choice.getAttribute('id');
        playGame(userChoiceId);
    });
});