/*jshint esversion: 6 */
/*jshint esversion: 7*/
/*jshint globalstrict: true*/
/* jshint node: true */
'use strict';
/*
//how to select element in html using JS
console.log(document.querySelector('.message').textContent);

//change content from html
console.log(
  (document.querySelector('.message').textContent = '🥳 Correct Number!')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

//get value from input element
console.log((document.querySelector('.guess').value = 23));
*/
//randomly select secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number!';
    displayMessage('🥳 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#32CD32';

    document.querySelector('.number').style.width = '30rem';
    //When game is finished check if the current score is high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guessing is wrong
  } else if (guess > secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '⬇ Lower!' : '⬆ Higher!';
      displayMessage(guess > secretNumber ? '⬇ Lower!' : '⬆ Higher!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😭 You Lost!';
      displayMessage('😭 You Lost!');
      document.querySelector('.score').textContent = 0;
    }

    //when guessing is too low
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
