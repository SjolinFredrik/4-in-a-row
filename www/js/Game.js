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
    if(currentPlayer === 'red'){
      currentPLayer === 'yellow'
    } else if(currentPLayer === 'yellow'){
      currentPlayer === 'red'
    }

  }
}