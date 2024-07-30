'use strict';

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const randomDice = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdGame = document.querySelector('.btn--hold');

let scores; 
let currentScore; 
let players;
let gameOn;

const allGame = function () {
  scores = [0, 0];
  currentScore = 0;
  players = 0;
  gameOn = true;

  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;

  randomDice.classList.add('hidden');
  randomDice.src = 'image/dice-1.png';
};
allGame();

const nextPlayer = function () {
  document.querySelector(`#current--${players}`).textContent = 0;
  currentScore = 0;

if (players === 0) {
    players = 1
} else {
    players = 0
}
};

rollDice.addEventListener('click', function () {
  if (gameOn) {
    const dice = Math.floor(Math.random() * 6) + 1;
    randomDice.classList.remove('hidden');
    randomDice.src = `image/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${players}`).textContent = currentScore;
    } else {
      nextPlayer();
    }
  }
});

holdGame.addEventListener('click', function () {
  if (gameOn) {
    scores[players] += currentScore;
    document.querySelector(`#score--${players}`).textContent = scores[players];

    if (scores[players] >= 100) {
      gameOn = false;
      randomDice.classList.add('hidden');

    } else {
      nextPlayer();
    }
  }
});

newGame.addEventListener('click', allGame);
