class Cell extends Component {

  constructor(game, row, col) {
    super();
    this.game = game;
    this.row = row;
    this.col = col;
    this.color = "";
    this.addEvents({
      'click div>div': 'click'
    });
  }

  click(e) {
    // this.game.currentPlayer.type === 'human') 
      this.game.board.makeMove(this.col);
   //  } else  {
      // this.game.board.makeMoveBot();
      // console.log("HEy bot");
     }

  }
