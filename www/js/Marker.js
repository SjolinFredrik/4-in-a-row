class Marker extends Component {

   constructor(board, row, col){
    super();
    this.board = board;
    this.row = row;
    this.col = col;
    this.color = ''; 
    this.addEvents({
      'click div': 'click'
    });

    this.playerColor();
  }

  
  click(e){
    e.stopPropagation();
    this.board.columnClicked(this.col);
  }
  playerColor(){
    let r = Math.random();
    this.color = r < .3 ? 'yellow' : this.color;
    this.color = r > .7 ? 'red' : this.color;
  }
}
