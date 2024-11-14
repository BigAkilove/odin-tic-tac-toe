const TicTacToe = {
  board: [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
}

function createPlayer (name, sign) {
  return { name, sign }

}

const player1 = createPlayer('crossPlayer', 'X');
const player2 = createPlayer('circlePlayer', 'O');

const checkFlow = (function () {
  const checkWin = () => {
  let hasAnyoneWon ;
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

  if (case1 === case2 && case1 === case3 && case1 != undefined) {
    hasAnyoneWon = true
  } else if (case4 === case5 && case4 === case6 && case4 != undefined) {
    hasAnyoneWon = true
  } else if (case7 === case8 && case7 === case9 && case7 != undefined) {
    hasAnyoneWon = true
  } else if (case1 === case4 && case1 === case7 && case1 != undefined) {
    hasAnyoneWon = true
  } else if (case2 === case5 && case2 === case8 && case2 != undefined) {
    hasAnyoneWon = true
  } else if (case3 === case6 && case3 === case9 && case3 != undefined) {
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

  return { checkWin }
})()

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


const calculator = (function () {
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
  })();