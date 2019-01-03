class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color) {
    super();
    this.players = players;
    //this.currentPlayer = players[0];
    //this.showPlayer = this.currentPlayer.name;
    this.changePlayer();
    this.pickPlayer();
    this.board = new Board(this);

  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    this.showPlayer = this.currentPlayer.name;
    this.render();
  }
  // method to pick player type for bot = isNotHuman
  pickPlayer() {
    this.currentPlayer = this.currentPlayer === this.isNotHuman ? true : false;
    this.bot = this.isNotHuman;
    // this.currentPlayer = this.currentPlayer === this.isHuman ? false : true;
    console.log("hey bot");
    this.render();
  }
}