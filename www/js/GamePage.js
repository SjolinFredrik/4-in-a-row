class GamePage extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Spela');
    this.playersForm = new PlayersForm();
    this.addEvents({
      'click .start-game': 'startGame',
      'click  .radio-btn': 'createPlayerOption'
    });
    Store.gamePage = this;
  }
  
  // create a method to start the game with 2 players, and put them
  // into one array So Game.js can catch this object.

  startGame() {
    let player1 = (this.baseEl.find('#name1').val() === 'bot') ? (new Bot (this.baseEl.find('#name1').val(), 'red')) : (new Player('red'));
    let player2 = (this.baseEl.find('#name2').val() === 'bot') ? (new Bot (this.baseEl.find('#name2').val(), 'yellow')) : (new Player('yellow'));

    // Calls on the method for the validation that's created
    // in the PlayersForm.js, when the validation is a succsess the game starts.
    if (this.playersForm.validateInputNames()) {
      this.game = new Game([player1, player2]);
      console.log("This is almost working");
      //adding navbar to Store variable to temporarilly store navbar 
      Store.navbar.showingCancelButton = true;
      Store.navbar.render();
      this.render();
      
      /* this.createPlayerOption();
      this.game.players = this.game.currentPlayer.name;
      this.game.currentPlayer = this.game.players[0];
      if (this.board.checkIfTwoBots()) {
        this.board.runTwoBots();
      }
      else if (this.game.checkPlayerType() === this.game.isNotHuman) {
        this.board.makeMoveBot(Math.floor(Math.random() * 7));
      }
    } */
  }
  }
  unmount() {
    delete this.game;
  }
}

