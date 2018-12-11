class Board extends Component {

  constructor() {
    super();
    this.cells = [];
    this.createBoard();

  }
  createBoard() {
    this.board =[];
    for (let row = 0; row <= 5; row++) {
      let rowArray = [];
      for (let col = 0; col <= 6; col++) {
        rowArray.push(new Cell(this, row, col));
      }
      this.board.push(rowArray);
    }
  }

  cellClicked(col){
  console.log('You clicked  ' + col)
  }

}