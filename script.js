'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let difaulteScore = 20;
let hgihScore = 0;

// get document nodes
const showNumber = document.querySelector('[data-show-number-btn]');
const message = document.querySelector('[data-message]');
const score = document.querySelector('.score');
const body = document.body;
const restartGame = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');
const guess = document.querySelector('[data-guess-fild]');

restartGame.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  showNumber.textContent = '?';
  difaulteScore = 20;
  score.textContent = difaulteScore;
  messageTextContent('Start guessing...');
  changeUiStyle('#222', '15rem');
  guess.value = '';
});

// showNumber.addEventListener('click', () => {});

document.querySelector('[data-check-btn]').addEventListener('click', () => {
  const guessNumber = +guess.value;

  if (!guessNumber) {
    messageTextContent('⛔ No Number');
  } else if (guessNumber == secretNumber) {
    messageTextContent('Correct Number 🎉');
    showNumber.innerHTML = secretNumber;
    changeUiStyle('#60b347', '30rem');
    if (hgihScore < difaulteScore) {
      hgihScore = difaulteScore;
      highScoreEl.textContent = hgihScore;
    }
  } else if (guessNumber !== secretNumber) {
    messageTextContent(
      guessNumber > secretNumber ? '📈 Too Mach' : '📉 Too Low'
    );
    score.textContent = --difaulteScore;
  }
});

// helper functions
function messageTextContent(messageText) {
  message.textContent = messageText;
}

function changeUiStyle(bgColor, width) {
  body.style.backgroundColor = bgColor;
  showNumber.style.width = width;
}
