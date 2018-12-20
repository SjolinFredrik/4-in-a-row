class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color) {
      super();
      this.players = players;
      //this.currentPlayer = players[0];
      //this.showPlayer = this.currentPlayer.name;
      this.changePlayer();
      this.board = new Board(this);
    }
    
    changePlayer(){
      this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0]; 
      this.showPlayer = this.currentPlayer.name;
      this.render();
  }
}
startGame(){
  this.Board.renderBoard();
  this.playerName = this.player1.name;
  this.activePlayer = 1;
  this.winner = '';
  this.moveCounter1 = 0;
  this.moveCounter2 = 0;
  this.winCount = 0;
  this.render();
  if (this.checkIfTwoComp()) {
    this.runTwoComp();
  }
  else if (this.checkType() === 'Computer') {
    this.fall2(Math.floor(Math.random() * 7));
  }
}
