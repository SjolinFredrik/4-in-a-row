class GamePage extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Spela');
    this.playersForm = new PlayersForm();
    this.addEvents({
      'click .start-game': 'startGame'
    });
    Store.gamePage = this;

  }

  // create a method to start the game with 2 players, and put them
  // into one array So Game.js can catch this object.
  restartGame(players) {
    this.game = new Game(players, undefined, this);
    this.render();
  }

  startGame() {
    let playerOneType = $("input[type='radio'][name='player1']:checked").val();
    let playerTwoType = $("input[type='radio'][name='player2']:checked").val();
    let player1Name = this.baseEl.find('#name1').val();
    let player2Name = this.baseEl.find('#name2').val();
    let player1 = new Player(player1Name, 'red', playerOneType);
    let player2 = new Player(player2Name, 'yellow', playerTwoType);

    // Calls on the method for the validation that's created
    // in the PlayersForm.js, when the validation is a succsess the game starts.
    if (this.playersForm.validateInputNames()) {
      this.game = new Game([player1, player2], undefined, this);

      //adding navbar to Store variable to temporarilly store navbar 
      Store.navbar.showingCancelButton = true;
      Store.navbar.render();
      this.render();

    }
  }

  unmount() {
    delete this.game;
  }
}

