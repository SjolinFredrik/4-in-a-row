class Game extends Component {

  // players catches the created array in gamepage
  constructor(players) {
      super();
      this.players = players;
      this.board = new Board();
  }
}