/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, winnerScore;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {

        dice = Math.floor(Math.random() * 6) + 1;
        ace = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        document.querySelector('#current-' + activePlayer).innerHTML = '<p>' + dice + '</p>';

        var aceDOM = document.querySelector('.ace');
        aceDOM.style.display = 'block';
        aceDOM.src = 'ace-' + ace + '.png';
        document.querySelector('#current-' + activePlayer).innerHTML = '<p>' + ace + '</p>';

        if (dice !== 1 && ace !== 1) {
            roundScore += dice + ace;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {

        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.winning-score').value;

        if (input) {
            winnerScore = input;
        } else {
            winnerScore = 100;
        }

        if (scores[activePlayer] >= winnerScore) {

            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.ace').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } 
        else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.ace').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.ace').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}

document.querySelector('.btn-help').addEventListener('click', function () {
    alert('Either player must NOT roll 1 in any turn or else he/she loses his/her TURN and also all their accummulated scores');
});


 /*if (dice == 6 && lastDice == 6) {
             scores[activePlayer] = 0;
             document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
             nextPlayer();
         } 
         else if (dice !== 1) {
             roundScore += dice + ace;
             document.querySelector('#current-' + activePlayer).textContent = roundScore;
         } 
         else {
             nextPlayer();
         }

         lastDice = dice;
*/