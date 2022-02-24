'use strict';
//defining secret number that user have to guess
/* Game#1 

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log((document.querySelector('.number').textContent = secretNumber));
let highScore = 0;
//give 20 tries to user
let score = 20;
let guess1 = function (message) {
  document.querySelector('.guess').value = message;
};
let secretNumber1 = function (message) {
  document.querySelector('.number').textContent = message;
};
let score1 = function (message2) {
  document.querySelector('.score').textContent = message2;
};
let message = function (message1) {
  document.querySelector('.message').textContent = message1;
};
//adding two event lister to check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //guess is correct
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number';
  }
  if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    console.log(
      (document.querySelector('.message').textContent = 'YaY You chose correct')
    );

    document.querySelector('body').style.backgroundColor = 'Green';

    //guess is too high
  }
  if (guess !== secretNumber) {
    if (score > 1) score--;
    document.querySelector('.score').textContent = score;
    score > 1
      ? (document.querySelector('.message').textContent = 'Wrong guess')
      : (document.querySelector('.message').textContent = 'Lost the game');
  } else {
    document.querySelector('.message').textContent = 'You lost the game';
  }
  // } else if (guess > secretNumber) {
  //   console.log(
  //     (document.querySelector('.message').textContent = 'Number is too high')
  //   );
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   //guess is low
  // } else if (guess < secretNumber) {
  //   console.log(
  //     (document.querySelector('.message').textContent = 'Number is too low ')
  //   );
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }
});

//coding challange #1
// code for again button

document.querySelector('.again').addEventListener('click', function () {
  message('start guessing1');
  score1('20');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  secretNumber1(secretNumber);
  guess1('');
  document.querySelector('body').style.backgroundColor = 'black';
});
*/
