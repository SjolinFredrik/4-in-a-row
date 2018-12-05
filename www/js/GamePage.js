class GamePage extends Component {

 

  constructor(board, marker){
    super();
    this.addRoute('/play', 'Spela');
    this.board = board;
    this.marker = marker;
    this.addEvents({
      'click .start-game': 'startGame'
    });
  }

    // create a method to start the game with 2 players, and put them
    // into one array So Game.js can catch this object.
    startGame(){
      let player1 = new Player(this.baseEl.find('#name1').val());
      let player2 = new Player(this.baseEl.find('#name2').val());
      this.game = new Game([player1, player2]);
    }


}