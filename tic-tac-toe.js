const TicTacToe = {
  board: [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
  gameTurn: 0,
  turnSinceWin: 0,
  winner : '',
  players : [],
  currentPlayer: ''
}

const gameflow = (function () {

function createPlayer (name, sign) {
  function addPlayerToPlayersObject() {
    TicTacToe.players.push({name,sign});
  }
  addPlayerToPlayersObject();
  
  return { name, sign }
}

function makeAMove(tile, player) {
  if (player === TicTacToe.players[0].name) {
    TicTacToe.board[tile] = 'X';
    TicTacToe.currentPlayer = 'X'
  } else if (player === TicTacToe.players[1].name) {
    TicTacToe.board[tile] = 'O';
    TicTacToe.currentPlayer = 'O'
  }
  console.log(TicTacToe.board)
}

function checkFlow (tile) {
  if(gameflow.checkIfGameIsWon() === true) return

  if (TicTacToe.board[tile] === undefined) {

    let player;
    if (TicTacToe.gameTurn >8 ) return 'game over';

    if (TicTacToe.gameTurn % 2  === 0) {
      player = TicTacToe.players[0].name;
      TicTacToe.gameTurn += 1;

    } else if (TicTacToe.gameTurn % 2  === 1) {
      player = TicTacToe.players[1].name;
      TicTacToe.gameTurn += 1;
    }

    gameflow.makeAMove (tile, player);
    if(gameflow.checkIfGameIsWon() ) {

      if (TicTacToe.board[tile] === 'X') {
        TicTacToe.winner = TicTacToe.players[0].name
      } else TicTacToe.winner = TicTacToe.players[1].name
        const winnerParagraph = document.querySelector('#winner-announcement');
        winnerParagraph.innerText = `The winner is ${TicTacToe.winner}!`
        gameflow.showWinnerDialog(true)
        return
    }
    console.log(TicTacToe.board[tile])
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
      gameflow.checkFlow(lastCharacter);

      if (checkIfGameIsWon() && TicTacToe.turnSinceWin >2) {
        return;
      }
      else {
        button.innerText = TicTacToe.currentPlayer;
      }
    });
  });
}

function showWinnerDialog (boolean) {
  const winnerDialog = document.querySelector('#winner-dialog')
  if(boolean) {
    winnerDialog.showModal();
  }

  const winnerDialogParagraph = document.querySelector('#dialog-winner-paragraph');
  winnerDialogParagraph.innerText = `The winner is ${TicTacToe.winner}!`;

  const closeDialogButton = document.querySelector('#close-dialog');
  closeDialogButton.addEventListener('click', () => {
    winnerDialog.close();
  })
}

function createCustomPlayer () {
  const customPlayer1 = document.querySelector('#player1')
  const customPlayer1Button = document.querySelector('#change-name-button1');
  customPlayer1Button.addEventListener('click', () => {
    TicTacToe.players[0].name = customPlayer1.value;
  });

  const customPlayer2Button = document.querySelector('#change-name-button2');
  customPlayer2Button.addEventListener('click', () => {
    TicTacToe.players[1].name = customPlayer2.value;
  });
}

function resetTheGame () {
  const resetButton = document.querySelector('#reset-button');
  resetButton.addEventListener('click',() => {
    const winnerParagraph = document.querySelector('#winner-announcement');
    TicTacToe.board = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
    TicTacToe.gameTurn = 0;
    TicTacToe.turnSinceWin = 0;
    TicTacToe.winner = ''; 
    winnerParagraph.innerText = 'The winner is...';
    currentPlayer = '';
    const allButtons = document.querySelectorAll('#tic-tac-toe-container button');

    allButtons.forEach((button) => {
      button.innerText = '\u2060';
    })
  })
}

  return {createPlayer, makeAMove, checkFlow,checkIfGameIsWon,linkButtonsToTicTacToeArray,showWinnerDialog, createCustomPlayer, resetTheGame}
})();

gameflow.createPlayer('Cross player', 'X');
gameflow.createPlayer('Circle player', 'O');
gameflow.linkButtonsToTicTacToeArray();
gameflow.createCustomPlayer();
gameflow.resetTheGame();