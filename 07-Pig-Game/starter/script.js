'use strict';
//seclecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//expressing conditions
const scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//roling dice funcitonality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1 generate random number
    const dice = Math.trunc(Math.random() * 6 + 1);
    //2 reveal dice based on the random numher
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3 check for 1 if true switch to next player
    const swithPlayer = function () {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      //switch player by chanign active player 1 and 0 this way curretn score cange accordingly
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    };
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      //dynamically give dice value based on 0 and 1 value of acgtive player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swithPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //current score add to active palyer score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if  player score is >=100
    //switch to other player
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('.player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('.player--active');
    } else {
      swithPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores[currentScore] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  score0El.classList.add('player--active');
  diceEl.classList.remove('hidden');
  playing = true;
});
