class Board extends Component {

  constructor(game) {
    super();
    this.board = [];
    this.game = game;
    this.row = 6;
    this.col = 7;
    this.createBoard();
    // this.makeMove();


  }

  createBoard() {
    for (let row = 0; row < 6; row++) {
      let row = [];
      for (let col = 0; col < 7; col++) {
        row.push(new Cell(this.game, row, col));
      }
      this.board.push(row);
    }
  }

  makeMove(col) {
    for (let row = 5; row >= 0; row--) {
      if (this.board[row][col].color === "") {
        this.board[row][col].color = this.game.currentPlayer.color;
        this.board[row][col].render();
        this.checkForWin();
        this.game.changePlayer();
        break;
      }
    }
    return false;
  }

  checkForWin() {
    let winnerColor;

    if (this.checkVerticals() === 'yellow' || this.checkVerticals() === 'red') {
      winnerColor = this.checkVerticals();
      alert(winnerColor + ' wins');
    } else if (this.checkHorizontals() === 'yellow' || this.checkVerticals() === 'red') {
      winnerColor = this.checkHorizontals();
      alert(winnerColor + ' wins');
    } else if (this.checkDiagonalsBLtoTR() === 'yellow' || this.checkDiagonalsBLtoTR() === 'red') {
      winnerColor = this.checkDiagonalslBLtoTR();
      alert(winnerColor + ' wins');
    }// if (this.checkDiagonalsTLtoBR() === 'yellow' || this.checkDiagonalsTLtoBR() === 'red') {
    //   winnerColor = this.checkDiagonalsTLtoBR();
    //   alert(winnerColor + ' wins');
    //}
  }

  checkHorizontals() {
    let colors = ['red', 'yellow'];
    for (let color of colors) {
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
          let won = true;
          for (let i = 0; i < 4; i++) {
            if (col + i > 6) {

              // this column does not exists so just set won to false
              // and skip this iteration of the loop / continue
              won = false;
              continue;
            }

            won = won && this.board[row][col + i].color === color;
          }
          if (won) { return color; }
        }
      }
    }
    return false;
  }


  checkVerticals() {
    let colors = ['red', 'yellow'];
    for (let color of colors) {
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
          let won = true;
          for (let i = 0; i < 4; i++) {
            if (row + i > 5) {
              // this column does not exists so just set won to false
              // and skip this iteration of the loop / continue
              won = false;
              continue;
            }
            won = won && this.board[row + i][col].color === color;
          }
          if (won) { return color; }
        }
      }
    }
    return false;
  }


  checkDiagonalsBLtoTR() {
    let colors = ['red', 'yellow'];
    for (let color of colors) {
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
          let won = true;
          for (let i = 0; i < 4; i++) {
            if (row + i > 5) {
              // this column does not exists so just set won to false
              // and skip this iteration of the loop / continue
              won = false;
              continue;
            }
            if ((this.board[row - 1][col + 1].color == i) && (this.board[row - 2][col + 2].color == i) && (this.board[row - 3][col + 3].color == i)){
               
            }
            won = won && this.board[row + i][col].color === color;
          }
          if (won) { return color; }
        }
      }
    }
    return false;
  }

  // checkDiagonalsTLtoBR() {
  //   let colors = ['red', 'yellow'];
  //   for (let color of colors) {
  //     for (let row = 0; row < 6; row++) {
  //       for (let col = 0; col < 7; col++) {
  //         let won = true;
  //         for (let i = 0; i < 4; i++) {
  //           if (row + i > 5) {
  //             // this column does not exists so just set won to false
  //             // and skip this iteration of the loop / continue
  //             won = false;
  //             continue;
  //           }
  //           won = won && this.board[row + i][col].color === color;
  //         }
  //         if (won) { return color; }
  //       }
  //     }
  //   }
  //   return false;
  // }
}