class Board extends Component {
  constructor(game, gamePage) {
    super();
    this.board = [];
    this.game = game;
    this.gamePage = gamePage;
    this.createBoard();
    // this.modalHide();
    this.gameWon = false;
    this.draw = false;
    //this.count = 0;
    //this.winnerColor = '';
    this.addEvents({
      'click .restart-button': 'startGame'
    });
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
  //loop through all cells to find empty, 
  //when empty and player chooses row find last empty cell 
  //and fill with player color
  makeMove(col) {
    for (let row = 5; row >= 0; row--) {
      if (this.board[row][col].color === "") {
        this.board[row][col].color = this.game.currentPlayer.color;
        this.board[row][col].render();
        this.checkForWin();
        if (this.gameWon === true) {
          break
        };
        this.checkForTie();
        this.game.changePlayer();
        break;
      }
    }
    return false;
  }
  makeMoveBot() {
   // let emptyCell = true;
   // while (emptyCell) {
     setTimeout(() => {
      let randomCol = Math.floor(Math.random() * 7);
      for (let row = 5; row >= 0; row--) {
        if (this.board[row][randomCol].color === "") {
          this.board[row][randomCol].color = this.game.currentPlayer.color;
        //  emptyCell = false;
          this.board[row][randomCol].render();
          this.checkForWin();
          if (this.gameWon === true) {
            break
          };
          this.checkForTie();
         
          this.game.changePlayer();
          break;
          // Math.floor(Math.random() * 7);
        }
   //   }
      }
    }, 1000)
  }
  //make a function for a bot
  // makeMoveBot(col) {
  //   for (let row = 5; row >= 0; row--) {
  //     if (this.board[row][col].color === "") {
  //       this.board[row][col].color = this.game.currentPlayer.color;
  //       this.board[row][col].render();
  //       this.game.changePlayer();
  //       this.checkForTie();
  //       this.checkForWin();
  //      if (this.game.checkPlayerType() === this.game.isNotHuman) {
  //         if (this.winnerColor) {
  //           return;
  //         }
  //         this.makeMoveBot(Math.floor(Math.random() * 7));
  //       }
  //       if (this.count + this.count === 42 && !this.winnerColor) {
  //        // $('.draw-modal').modal('show');
  //       }
  //       return;
  //     }
  //   }
  // }
  //to check for win create a variable for winner color, set winning conditions and alert result
  checkForWin() {
    let winnerColor;
    this.gameWon = false;
    if (this.checkVerticals() === 'yellow' || this.checkVerticals() === 'red') {
      winnerColor = this.checkVerticals();
      this.gameWon = true;
      this.theWinnerIs();
      this.render();
    } else if (this.checkHorizontals() === 'yellow' || this.checkHorizontals() === 'red') {
      winnerColor = this.checkHorizontals();
      this.gameWon = true;
      this.theWinnerIs();
      this.render();
    } else if (this.checkDiagonalsBLtoTR() === 'yellow' || this.checkDiagonalsBLtoTR() === 'red') {
      winnerColor = this.checkDiagonalsBLtoTR();
      this.gameWon = true;
      this.theWinnerIs();
      this.render();
    } else if (this.checkDiagonalsTLtoBR() === 'yellow' || this.checkDiagonalsTLtoBR() === 'red') {
      winnerColor = this.checkDiagonalsTLtoBR();
      this.gameWon = true;
      this.theWinnerIs();
      this.render();
    }
  }
  //   } else if (this.checkHorizontals() && this.checkVerticals() && this.checkDiagonalsBLtoTR() && this.checkDiagonalsTLtoBR() !== 'yellow' ){
  //     this.game.modalHide();
  //   }else if (this.checkHorizontals() && this.checkVerticals() && this.checkDiagonalsBLtoTR() && this.checkDiagonalsTLtoBR() !== 'red' ){
  //     this.game.modalHide();
  // }
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
      this.draw = true;
      this.isDraw();
      this.render();
    }
  }
  //loop throgh all cells to find 4 in a row horizontal, vertical and diagonal up and down
  //loop through all colors aka the 2 players and then through all cells to find same 
  //color next to each other
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
            if (row - i < 0 || col + i > 6) {
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
            if (row + i > 5 || col + i > 6) {
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
  // modalHide(){
  //   if(this.gameWon){
  //     $('#modal').modal('hide');
  //   }
  //   this.render();
  // }
  //modal to show the winner
  theWinnerIs() {
    this.gameWon = true;
    setTimeout(() => { $('#modal').modal('show');}, 10000)
    console.log('modal');
  }
  isDraw() {
    this.draw = true;
    $('#draw-modal').modal('show');
  }
}