class Board extends Component {
  constructor() {
    super();
    this.marker = [];
    this.renderBoard();
  }

  renderBoard(){
    this.board = [];
    for (let row = 0; row < 6; row++) {
      let rowArr = [];
      for (let col = 0; col < 7; col++) {
        rowArr.push(new Marker(this. row, col));
      }
      this.board.push(rowArr);
    }
  }

  columnClicked(col){
    alert('blah blah ' + col);

  
  }
}