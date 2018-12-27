class Board extends Component {

  constructor(game) {
    super();
    this.board = [];
    this.game = game;

    this.createBoard();
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
        this.checkForTie();
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

    } else if (this.checkHorizontals() === 'yellow' || this.checkHorizontals() === 'red') {
      winnerColor = this.checkHorizontals();
      alert(winnerColor + ' wins');

    } else if (this.checkDiagonalsBLtoTR() === 'yellow' || this.checkDiagonalsBLtoTR() === 'red') {
      winnerColor = this.checkDiagonalsBLtoTR();
      alert(winnerColor + ' wins');

    } else if (this.checkDiagonalsTLtoBR() === 'yellow' || this.checkDiagonalsTLtoBR() === 'red') {
      winnerColor = this.checkDiagonalsTLtoBR();
      alert(winnerColor + ' wins');
    }
  }

  //checking for a tie
  checkForTie() {
    let count = 0;
    //looping through the columns in the last row, if they are full and there are no 4 in a row, it's a tie
    for (let col = 0; col < 7; col++) {
      if (this.board[0][col].color !== '') {
        count = count + 1;
      }
    }
    if (count === 7 && this.checkVerticals() === false && this.checkHorizontals() === false && this.checkDiagonalsBLtoTR() === false && this.checkDiagonalsTLtoBR() === false) {
      alert("It's a tie");
    }
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
      for (let row = 0; row <= 3; row++) {
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
            if(row - i < 0 || col + i > 6){
              won = false;
              continue;
            }
            won = won && this.board[row - i][col + i].color === color;
          }
          if (won) { return color; }
        }
      }
    }
    return false;
  }


  checkDiagonalsTLtoBR() {
    let colors = ['red', 'yellow'];
    for (let color of colors) {
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
          let won = true;
          for (let i = 0; i < 4; i++) {
            if(row + i > 5 || col + i > 6){
              won = false;
              continue;
            }
            won = won && this.board[row + i][col + i].color === color;
          }
          if (won) { return color; }
        }
      }
    }

    return false;
  }
}