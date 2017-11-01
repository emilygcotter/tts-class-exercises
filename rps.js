var hands = ['rock', 'paper', 'scissors'];

var player1 = {
              name: 'john',
              score: 0,
              hand: function() {
                return hands[parseInt(Math.random()*10)%3];
              }
            };

var player2 = {
              name: 'sally',
              score: 0,
              hand: function() {
                return hands[parseInt(Math.random()*10)%3];
              }
            };

playGame(player1, player2, 7);

function playRound(playOne, playTwo) {
  var playOneHand = playOne.hand();
  var playTwoHand = playTwo.hand();

  var winner = null;
  if (playOneHand === 'rock' && playTwoHand === 'paper'
  || playOneHand === 'paper' && playTwoHand === 'scissors'
  || playOneHand === 'scissors' && playTwoHand === 'rock') {
//playTwoHand wins
    winner = playTwo;
    console.log("Player One: " + playOneHand + "Player Two: " + playTwoHand + "\n" + "Player Two wins!");
  } else if (playTwoHand === 'rock' && playOneHand === 'paper'
  || playTwoHand === 'paper' && playOneHand === 'scissors'
  || playTwoHand === 'scissors' && playOneHand === 'rock') {
    //playOneHand wins
    winner = playOne;
    console.log("Player One: " + playOneHand + "Player Two: " + playTwoHand + "\n" + "Player One wins!");
  } else if (playOneHand === playTwoHand) {
    winner = "It's a tie!";
    console.log("It's a tie!")
  } else {
    //something weird happened
    console.log("Something weird happened.");
  }
  return winner;
}

function playGame(firstPlayer, secondPlayer, playUntil) {

  for (i = 0; i < playUntil; i ++) {
    var winningUser = playRound(firstPlayer, secondPlayer);
    winningUser.score += 1;
  }
  if (firstPlayer.score > secondPlayer.score) {
    console.log("First Player Wins!");
  } else if (secondPlayer.score > firstPlayer.score) {
    console.log("Second Player Wins!");
  } else {
    console.log("Tie!");
    }
};
