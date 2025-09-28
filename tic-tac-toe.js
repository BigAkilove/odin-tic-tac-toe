const TicTacToe = {
  board: [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],
  gameTurn: 0
}

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

function makeAMove(tile, player) {
  if (player === 'Cross player') {
    TicTacToe.board[tile] = 'X';
  } else if (player === 'Circle player') {
    TicTacToe.board[tile] = 'O';
  }
  console.log(TicTacToe.board)
}

function checkFlow (tile) {
  if(checkIfGameIsWon() ) {
    console.log(`The winner is ${player}!`)
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
    console.log(`The winner is ${player}!`)
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
    console.log('Stop the count!');
    return (isGameWon)
  }
}

/* const checkFlow = (function () {
  const checkWin = () => {
  let hasAnyoneWon ;
  let case1, case2, case3, case4, case5, case6, case7, case8, case9;

  if 
    hasAnyoneWon = true

  } else if (case1 === case5 && case1 === case9 && case1 != undefined) {
    hasAnyoneWon = true
  } else if (case3 === case5 && case3 === case7 && case3 != undefined) {
    hasAnyoneWon = true
  } else {
    hasAnyoneWon = false
  } 
  return hasAnyoneWon
  }

  const decideFirstPlayer = () => {
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

// const createGame = (function(game) {
//     const TicTacToe = {
//       game,
//       board: '[]'
//     }
//         console.log(TicTacToe)
//     return { TicTacToe };
// })()

// function createUser (name) {
//   const discordName = "@" + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;

//   return { name, discordName, getReputation, giveReputation };
// }

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();

// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation()
// });


/* const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476


  const Formatter = (function() {
    let timesRun = 0;
  
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => { 
      log("Setting times run");
      ++timesRun;
    }
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      setTimesRun();
      return text.toUpperCase();
    };
  
    return {
      makeUppercase,
      timesRun,
    }
  })(); */