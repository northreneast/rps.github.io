
let choice = '';
let answer = '';
let computer = '';
let scores = JSON.parse(localStorage.getItem('scores'));
scoreResult();

function computerMove() {
    let randomNumber = Math.random();
    let result = '';
    if (randomNumber >= 0 && randomNumber < 1/3)
        result = 'rock';
    else if (randomNumber >= 1/3 && randomNumber < 2/3)
        result = 'paper';
    else result = 'scissors';
    return result;
}

function result(choice) {
    computer = computerMove();
    if (choice === 'rock') {
        if (computer === 'rock') {
            answer = 'It\' a draw';
            scores.draw++;
        } else if (computer === 'paper') {
            answer = 'You win!';
            scores.win++;
        } else {
            answer = 'You Lose!';
            scores.lose++;
        }
        moves();
        scoreResult();
    } else if (choice === 'paper') {
        if (computer === 'rock') {
            answer = 'You lose!';
            scores.lose++;
        }
        else if (computer === 'paper') {
            answer = 'It\'s a draw';
            scores.draw++;
        }
        else {
            answer = 'You win!';
            scores.win++;
        }
        moves();
        scoreResult();
    } else if (choice === 'scissors') {
        if (computer === 'rock') {
            answer = 'You win!';
            scores.win++;
        }
        else if (computer === 'paper') {
            answer = 'You lose!';
            scores.lose++;
        }
        else {
            answer = 'It\'s a draw.';
            scores.draw++;
        }
        moves();
        scoreResult();
    } else {
        scores = {
            win: 0,
            lose: 0,
            draw: 0
        };
        localStorage.removeItem('scores');
        scoreResult();
    }

    localStorage.setItem('scores', JSON.stringify(scores));
}


function moves() {
    document.querySelector('.js-result').innerHTML = `${answer}`;
    document.querySelector('.js-moves')
        .innerHTML = `You <img class="move-icon" src="${choice}-emoji.png"> - <img class="move-icon" src="${computer}-emoji.png"> Computer`;
}

function scoreResult() {
    document.querySelector('.js-scores').innerHTML = `Wins: ${scores.win}, Losses: ${scores.lose}, Ties: ${scores.draw}`;
}

function themeColor() {
    const changeColor = document.body.style;
    const bodyText = document.body.style;
    const changeTheme = document.querySelector('.js-theme');
    const gameContent = document.querySelector('.js-content');
    let imageUpdate = '<img class="day-icon" src="day.png">';

    if (changeTheme.innerHTML === imageUpdate) { 
        changeColor.backgroundColor = 'rgb(230, 230, 230)';
        bodyText.color = 'black';
        changeTheme.innerHTML =`<img class="night-icon" src="night.png">`;
        gameContent.classList.add('js-game-newclass');
    } else {
        changeColor.backgroundColor = 'rgb(50, 50, 50)';
        bodyText.color = 'white';
        changeTheme.innerHTML =`${imageUpdate}`;
        gameContent.classList.remove('js-game-newclass');
    }
}


const popup = document.querySelector(".popup").style;

document.querySelector(".js-signup").addEventListener("click", function() {
    popup.display = "flex";
});

document.querySelector(".js-close-button").addEventListener("click", function() {
    popup.display = "none";
});

const signup = document.querySelector(".js-signup-button");
const name = document.querySelector(".js-name-input");
const password = document.querySelector(".js-pass-input");
const nameError = document.querySelector(".js-name-error");
const passError = document.querySelector(".js-pass-error");

signup.addEventListener("click", function() {
    if (name.value == '' || name.value == null)
        nameError.innerText = `Username must not be blank.`;
    else nameError.innerText = '';

    if (password.value.length == 0)
        passError.innerText = `Password is required.`
    else if (password.value.length > 0 && password.value.length < 8)
        passError.innerText = `Password must be at least 8 characters.`;
    else passError.innerText = '';

    if (password.value.length >= 8 && name.value != '') {
        popup.display = "none";
        alert("Successfully signed up!");
    }
});



