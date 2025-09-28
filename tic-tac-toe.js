const TicTacToe = {
  board: [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
  gameTurn: 0,
  turnSinceWin: 0
}

const winnerParagraph = document.querySelector('#winner-error')

const players = [];

function createPlayer (name, sign) {
  function addPlayerToPlayersObject() {
    players.push({name,sign})
  }
  addPlayerToPlayersObject();
  return { name, sign }
}

createPlayer('Cross player', 'X');
createPlayer('Circle player', 'O');
let currentPlayer = '';
let winner;

function makeAMove(tile, player) {
  if (player === 'Cross player') {
    TicTacToe.board[tile] = 'X';
    currentPlayer = 'X'
  } else if (player === 'Circle player') {
    TicTacToe.board[tile] = 'O';
    currentPlayer = 'O'
  }
  console.log(TicTacToe.board)
}

function checkFlow (tile) {
  if(checkIfGameIsWon() === true) {
    console.log(`The winner is ${winner}!`)
    return
  }

  if (TicTacToe.board[tile] === undefined) {

    let player;
    if (TicTacToe.gameTurn >8 ) return 'game over';

    if (TicTacToe.gameTurn % 2  === 0) {
      player = players[0].name;
      TicTacToe.gameTurn += 1;

    } else if (TicTacToe.gameTurn % 2  === 1) {
      player = players[1].name;
      TicTacToe.gameTurn += 1;
    }

    makeAMove (tile, player);
    if(checkIfGameIsWon() ) {
      if(TicTacToe.board[tile] === 'X') {
        winner = 'Cross player'
      } else winner = 'Circle player'
    winnerParagraph.innerText = `The winner is ${player}!`
    return
  }
  } else console.log('You already played there!')
}

function checkIfGameIsWon (){
  let case1, case2, case3, case4, case5, case6, case7, case8, case9;
  case1 = TicTacToe.board[0];
  case2 = TicTacToe.board[1];
  case3 = TicTacToe.board[2];
  case4 = TicTacToe.board[3];
  case5 = TicTacToe.board[4];
  case6 = TicTacToe.board[5];
  case7 = TicTacToe.board[6];
  case8 = TicTacToe.board[7];
  case9 = TicTacToe.board[8];

  let isGameWon;

  if (
    (case1 === case2 && case1 === case3 && case1 != undefined) || 
    (case4 === case5 && case4 === case6 && case4 != undefined) ||
    (case7 === case8 && case7 === case9 && case7 != undefined) ||
    (case1 === case4 && case1 === case7 && case1 != undefined) ||
    (case2 === case5 && case2 === case8 && case2 != undefined) ||
    (case3 === case6 && case3 === case9 && case3 != undefined) ||
    (case1 === case5 && case1 === case9 && case1 != undefined) ||
    (case3 === case5 && case3 === case7 && case3 != undefined)) {
    isGameWon = true;
    TicTacToe.turnSinceWin +=1
    console.log('Stop the count!');
    return (isGameWon)
  }
}

function linkButtonsToTicTacToeArray () {
  const allButtons = document.querySelectorAll('#tic-tac-toe-container button');

  allButtons.forEach((button) => {
    button.innerText = '\u2060';
    button.addEventListener('click', (event) => {
      let lastCharacter = event.target.id.substr(event.target.id.length -1) -1;
      checkFlow(lastCharacter);

      if (checkIfGameIsWon() && TicTacToe.turnSinceWin >2) {
        return;
      }
      else {
        button.innerText = currentPlayer;
      }
    });
  });
}

linkButtonsToTicTacToeArray();

/*   const decideFirstPlayer = () => {
    const random = Math.random();
    let firstPlayer;

    if (random <= 0.5) {
      firstPlayer = 1;
    } else {
      firstPlayer = 2;
    }
    return firstPlayer;
  }

  const checkTurn = () => {
    let turnCount = 0
  }

  return { checkWin, decideFirstPlayer }
})() */