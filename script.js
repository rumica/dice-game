'use strict';

let player0 = document.querySelector('.player--0')
let player1 = document.querySelector('.player--1')
let player1Score = document.querySelector('#score--0')
let player2Score = document.querySelector('#score--1')
let current1 = document.querySelector('#current--0')
let current2 = document.querySelector('#current--1')
let rollBtn = document.querySelector('.btn--roll')
let holdBtn = document.querySelector('.btn--hold')
let newBtn = document.querySelector('.btn--new')
let dice = document.querySelector('.dice')

let activePlayer = 0;

current1.innerHTML = 0;
dice.classList.add('hidden')

let sum = 0;

rollBtn.addEventListener('click', setNumber)

function setNumber (){
    let chooseNumber= Math.floor(Math.random() * 6) + 1; 

    dice.src = `dice-${chooseNumber}.png`
    dice.classList.remove('hidden')

    if(chooseNumber !== 1){
        document.getElementById(`current--${activePlayer}`).innerHTML = sum += chooseNumber
    } else {
        document.getElementById(`current--${activePlayer}`).innerHTML = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        sum = 0;
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
    }
    console.log(chooseNumber)
}

holdBtn.addEventListener('click', holdScore)

let score = 0;

function holdScore (){

    document.getElementById(`current--${activePlayer}`).innerHTML = 0;
    document.getElementById(`score--${activePlayer}`).innerHTML = sum + Number(document.getElementById(`current--${activePlayer}`).innerHTML) + Number(document.getElementById(`score--${activePlayer}`).innerHTML)
    sum = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

newBtn.addEventListener('click', reset)

function reset (){
    sum = 0;
    activePlayer = 0;
    player1Score.innerHTML = 0;
    player2Score.innerHTML = 0;
    current1.innerHTML = 0;
    current2.innerHTML = 0;
    dice.classList.add('hidden')
    
    if(player1.classList.contains('player--active')){
        player1.classList.remove('player--active')
        player0.classList.add('player--active')
    } 
}

