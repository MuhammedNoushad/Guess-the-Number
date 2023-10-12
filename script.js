'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

const check = document.querySelector('.check');
let messageText = document.querySelector('.message');
let scoreText = document.querySelector('.score');
let guessedNumberText = document.querySelector('.number');
let bodyStyle = document.querySelector('body').style;
let heighestScore = document.querySelector('.highscore');
const again = document.querySelector('.again');

check.addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);
  console.log(guessedNumber);

  // if no number is entered
  if (guessedNumber <= 0 || guessedNumber > 20) {
    messageText.textContent = '🔢 please enter a NUMBER between 1-20 ';
  }

  // if the number is correct
  else if (guessedNumber === secretNumber) {
    messageText.textContent = '🥇 hurray you find the NUMBER!';
    guessedNumberText.textContent = secretNumber;
    bodyStyle.backgroundColor = 'green';
    guessedNumberText.style.width = '30rem';
    if (score > heighestScore.textContent) {
      heighestScore.textContent = score;
    }
  }

  // if the number is high
  else if (guessedNumber < secretNumber) {
    if (score < 1) {
      messageText.textContent = '💔 you are FAILED';
      score = 0;
    }
    messageText.textContent =
      '☝️ THE SECREAT NUMBER IS HIGHER THAN YOUR GUESSED NUMBER';
    score--;
    scoreText.textContent = score;
  }

  // if the number is low
  else if (guessedNumber > secretNumber) {
    if (score < 1) {
      messageText.textContent = '💔 you are FAILED';
      score = 0;
    }
    messageText.textContent =
      '👇 THE SECREAT NUMBER IS LOWER THAN YOUR GUESSED NUMBER';
    score--;
    scoreText.textContent = score;
  }
});

//  again button

again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  messageText.textContent = 'Start guessing...';
  scoreText.textContent = 20;
  bodyStyle.backgroundColor = '#222';
  guessedNumberText.style.width = '25rem';
  guessedNumberText.textContent = '?';
  document.querySelector('.guess').value = '';
});
