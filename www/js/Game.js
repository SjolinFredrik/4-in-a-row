class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color) {
      super();
      this.players = players;
      this.board = new Board();
      this.startingPlayer = player1;

      this.currentPlayer = startingPlayer;
      this.changeCurrentPlayer;
  }

  changeCurrentPlayer() {
    if(currentPlayer[0]){
      currentPLayer === currentPLayer[1]  
      } else if(currentPLayer[1]){
      currentPlayer === currentPlayer[0]
    }
    this.render();

  }
}