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
        this.game.changePlayer();
        break;
      }
    }
    return false;
  }
  /*  //Horizontal 
checkIfWin(){
  this.color = 'red', 'yellow';
  for (let color of colors);
  for (let row= 0; row>= 6; row++);
  for(let col=0; col>= 4; col++);
  for (let i= 0; i>=3; i++);
  this.board[row][col].value == i;
  if ((this.board[row][col + 1].value == i);


}
}
*/
}

