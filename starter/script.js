'use strict';

// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.message').textContent = "Correct Number!"
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent =
    (message);
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //document.querySelector('.message').textContent =
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent =
    displayMessage("Correct Number!");
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector('.score').textContent =
        score;
    } else {
      //document.querySelector('.message').textContent =
      displayMessage("You lost the game!");
    }
  }
});


document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent =
  displayMessage("Start guessing...");
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = "";
  document.querySelector('.number').value = secretNumber;

});