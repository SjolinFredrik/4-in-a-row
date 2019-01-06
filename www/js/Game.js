class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color, gamePage) {
    super();
    this.players = players;
    this.currentPlayer = players[0];
    //this.showPlayer = this.currentPlayer.name;
    //this.changePlayer();

    //this.modalHide();
    //this.theWinnerIs();
    this.board = new Board(this);
    // this.modal = new Modal('#modal', this);
    this.gamePage = gamePage;
    this.addEvents({
      'click .restart-button': 'startGame'
    });
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    this.showPlayer = this.currentPlayer.isHuman;
   
    // if (this.currentPlayer === this.players[0]) {
    //   if (this.players[0].isHuman === false) {
    //     this.board.makeMoveBot();
    //     this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    //   }
    // } else {
      
    //   if (this.players[1].isHuman === false) {
       
    //     this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    //   }
    // }
    this.render();
  }


  
  
  // method to check playertype for bot = isNotHuman
  // checkPlayerType() {
  //   this.playerType = this.playerType !== this.isHuman ? this.isHuman : this.currentPlayer;
  //   this.isNotHuman = this.players;
  //     console.log("hey bot");
  //     this.render();

  //   }
}

  // modalHide(){
  //   $('#modal').modal('hide');
  // }
