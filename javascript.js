'use strict';
// DOM VARIABLES
const mainTitle = document.getElementById('title')
const btnRoll = document.getElementById('roll__button');
const btnReset = document.getElementById('reset__button');
const oneScore = document.getElementById('pOneScore');
const twoScore = document.getElementById('pTwoScore');
const draw = document.getElementById('scoreDraw');
const dice1 = document.getElementById("img1");
const dice2 = document.getElementById("img2");

//Global Variables
let playerOneWins = 0;
let playerTwoWins = 0;
let playerDraw = 0;

//Button Functions
btnRoll.addEventListener('click', function() {
    let playerOne = Math.floor(Math.random() * 6) + 1;
    let playerTwo = Math.floor(Math.random() * 6) + 1;

    let playerOneDice = "images/dice" + playerOne + ".png";
    let playerTwoDice = "images/dice" + playerTwo + ".png";

    dice1.setAttribute("src", playerOneDice);
    dice2.setAttribute("src", playerTwoDice);

    if (playerOne > playerTwo){
        mainTitle.innerHTML = "Player One Wins";
        playerOneWins++;
        oneScore.innerHTML = `Player One Wins: ${playerOneWins}`;
    }
    else if(playerOne < playerTwo){
        mainTitle.innerHTML = "Player Two Wins" 
        playerTwoWins++;
        twoScore.innerHTML = `Player Two Wins: ${playerTwoWins}`;
    }else{     
        mainTitle.innerHTML = "Draw";
        playerDraw++;
        draw.innerHTML = `Draw: ${playerDraw}`;
    }
    })

btnReset.addEventListener('click', function(){
    playerOneWins = 0;
    playerTwoWins = 0;
    playerDraw = 0;
    mainTitle.innerHTML = 'The Dice Game';
    dice1.src = "images/dice6.png";
    dice2.src = "images/dice6.png";
    oneScore.innerHTML = `Player One Wins: ${playerOneWins}`;
    twoScore.innerHTML = `Player Two Wins: ${playerTwoWins}`;
    draw.innerHTML = `Draw: ${playerDraw}`;
    })