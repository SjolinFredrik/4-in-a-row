class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color, gamePage) {
    super();
    this.players = players;
    //this.currentPlayer = players[0];
    //this.showPlayer = this.currentPlayer.name;
    this.changePlayer();
    
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
    this.showPlayer = this.currentPlayer.name;
    this.render();
  }

  startGame(){
    this.gamePage.startGame();
  }
 


  // modalHide(){
  //   $('#modal').modal('hide');
  // }

  


}