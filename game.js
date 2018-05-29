var player1 = "Player1"
var player2 = "Player2"
var currentPlayer = ""
console.log('Page Loaded')
function pageLoad() {


  var randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber < 6){
    currentPlayer = player1

  }
  else {
    currentPlayer = player2
  }
    document.getElementById('currentPlayerName').innerHTML= "Turn: " + currentPlayer
}

window.onload = pageLoad;
function squareClicked(square){
  if (currentPlayer == player1){
    square.innerHTML = "X"
    currentPlayer = player2
  }
  else {
    square.innerHTML = "O"
    currentPlayer = player1
  }
var gameSquares = document.querySelectorAll(".square")
console.log(gameSquares)
var checkWinner = "X"
for(var i = 0; i < 2; i++){
  if (gameSquares[0].innerHTML == checkWinner && gameSquares[1].innerHTML == checkWinner && gameSquares[2].innerHTML == checkWinner){
    console.log(currentPlayer + " Won Line 1 Across")
  } else if (gameSquares[3].innerHTML == checkWinner && gameSquares[4].innerHTML == checkWinner && gameSquares[5].innerHTML == checkWinner){
    console.log(currentPlayer + " Won Line 2 Across")
  } else if (gameSquares[6].innerHTML == checkWinner && gameSquares[7].innerHTML == checkWinner && gameSquares[8].innerHTML == checkWinner){
    console.log(currentPlayer + " Won Line 3 Across")
  } else if (gameSquares[0].innerHTML == checkWinner && gameSquares[3].innerHTML == checkWinner && gameSquares[6].innerHTML == checkWinner){
    console.log(currentPlayer + " Won Column Down Line 1")
  } else if (gameSquares[1].innerHTML == checkWinner && gameSquares[4].innerHTML == checkWinner && gameSquares[7].innerHTML == checkWinner){
    console.log(currentPlayer + " Won Column Down Line 2")
  } else if (gameSquares[2].innerHTML == checkWinner && gameSquares[5].innerHTML == checkWinner && gameSquares[8].innerHTML == checkWinner){
    console.log(currentPlayer + " Won Column Down Line 1")
  } else if (gameSquares[0].innerHTML == checkWinner && gameSquares[4].innerHTML == checkWinner && gameSquares[8].innerHTML == checkWinner){
    console.log(currentPlayer + " Won Diagonal Line 1")
  } else if (gameSquares[2].innerHTML == checkWinner && gameSquares[4].innerHTML == checkWinner && gameSquares[6].innerHTML == checkWinner){
    console.log(currentPlayer + " Won Diagonal Line 2")
  } checkWinner = "O"
}
}
