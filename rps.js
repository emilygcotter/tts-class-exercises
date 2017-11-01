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

var player3 = {
              name: 'jane',
              score: 0,
              hand: function() {
                return hands[parseInt(Math.random()*10)%3];
              }
            };

var player4 = {
              name: 'emily',
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

function playTournament(firstPlayer, secondPlayer, thirdPlayer, fourthPlayer, playUntil) {
    playGame(player1, player2, 3);
    playGame(player3, player4, 3);
    if (player1.score > player2.score && player3.score > player4.score) {
      playGame(player1, player3, 3);
    } else if (player2.score > player1.score && player4.score > player3.score) {
      playGame(player2, player4, 3);
    } else {
      console.log("try again");
    };
    if (player1.score > player3.score) {
      console.log("The world champion is " + player1.name + "!")
    } else if (player3.score > player1.score) {
      console.log("The world champion is " + player3.name + "!")
    } else {
      console.log("Keep playing!");
    };
    if (player2.score > player4.score) {
      console.log("The world champion is " + player2.name + "!")
    } else if (player4.score > player2.score) {
      console.log("The world champion is " + player4.name + "!")
    } else {
      console.log("Keep playing!");
    };
}

playTournament(player1, player2, player3, player4, 3);
