class Cell extends Component {

   constructor(board, row, col){
    super();
    this.board = board;
    this.row = row;
    this.col = col;
    this.color = ""; 
    this.addEvents({
      'click div': 'click'
    });
  }

  click(e){
    e.stopPropagation();
    this.board.columnClicked(this.col);
  }

  testColor(){
    let r = Math.random();
    this.color = r < .3 ? 'yellow': this.color;
    this.color = r > .7 ? 'red': this.color;
  }
}