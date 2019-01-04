class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color) {
    super();
    this.players = players;
    //this.currentPlayer = players[0];
    //this.showPlayer = this.currentPlayer.name;
    this.changePlayer();
    this.checkPlayerType();
    this.board = new Board(this);
  
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    this.showPlayer = this.currentPlayer.name;
    this.render();
  }
  // method to check player type for bot = isNotHuman
  checkPlayerType() {
    this.players[0] = this.players[0] === this.isNotHuman ? true : false;
    console.log("hey bot");
    this.render();
  }
}
