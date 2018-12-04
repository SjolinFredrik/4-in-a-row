class GamePage extends Component {

  constructor(board, marker){
    super();
    this.addRoute('/play', 'Spela');
    this.board = board;
    this.marker = marker;
  }
}