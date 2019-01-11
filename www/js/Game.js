class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color, gamePage) {
    
    super();
    Store.game = this;
    this.players = players;
    this.currentPlayer = players[1];
    this.showPlayer = this.currentPlayer.name;
    this.changePlayer();
    this.board = new Board(this);
    this.gamePage = gamePage;
    this.addEvents({
      'click .restart-button': 'restartGame'
    });
  }

  restartGame(){
    this.gamePage.restartGame(this.players);
  }

  changePlayer() {   
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    this.showPlayer = this.currentPlayer.name;
    this.render();
  }

}


