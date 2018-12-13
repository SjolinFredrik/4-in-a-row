class Board extends Component {

  constructor(game) {
    super();
    this.cells = [];
    this.game = game;

    
    this.createBoard();
  }

  createBoard() {
    this.board = [];
    for (let row = 0; row <= 5; row++) {
      let rowArray = [];
      for (let col = 0; col <= 6; col++) {
        rowArray.push(new Cell(this.game, row, col));
      }
      this.board.push(rowArray);
    }
  }

  
}