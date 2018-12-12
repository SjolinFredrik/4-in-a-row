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
    this.color = this.game.currentPlayer.color;
    console.log('clicked cell');
    for (let col=6; col >)
    this.render();
    this.game.changePlayer();
  }
   
}