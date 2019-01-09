class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color, gamePage) {
    console.log('constructing new game with players', players, 'and gamepage', gamePage)
    super();
    Store.game = this;
    this.players = players;
    this.currentPlayer = players[1];
    this.showPlayer = this.currentPlayer.name;
    this.changePlayer();

    //this.modalHide();
    //this.theWinnerIs();
    this.board = new Board(this);
    // this.modal = new Modal('#modal', this);
    this.gamePage = gamePage;
    this.addEvents({
      'click .restart-button': 'restartGame'
    });
  }
  restartGame(){
    console.log('this.players', this.players);
    this.gamePage.restartGame(this.players);
  }
  changePlayer() {
    this.currentPlayer.moveNumber++;
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
  
    this.showPlayer = this.currentPlayer.name;
   
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


