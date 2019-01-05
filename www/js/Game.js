class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color) {
    super();
    this.players = players;
    this.changePlayer();
    this.checkPlayerType();
    this.board = new Board(this);

    //this.currentPlayer = players[0];
    //this.showPlayer = this.currentPlayer.name;
    //this.modalHide();
    //this.theWinnerIs();
   // this.modal = new Modal('#modal', this);
 
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    this.showPlayer = this.currentPlayer.name
    this.render();
  }

  // method to check playertype for bot = isNotHuman
 checkPlayerType() {
    this.playerType = this.playerType === this.isNotHuman ? this.isNotHuman : this.currentPlayer;
    this.bot = this.isNotHuman;
      console.log("hey bot");
      this.render();
    }
    }

    // modalHide(){
  //   $('#modal').modal('hide');
  //}
