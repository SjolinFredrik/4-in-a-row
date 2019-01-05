class GamePage extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Spela');
   
    this.playersForm = new PlayersForm();
    this.addEvents({
      'click .start-game': 'startGame',
      'click .restart-button': 'startGame'
    });
    Store.gamePage = this;
    
  }

  // create a method to start the game with 2 players, and put them
  // into one array So Game.js can catch this object.
  startGame() {
    let player1 = new Player(this.baseEl.find('#name1').val(), 'red');
    let player2 = new Player(this.baseEl.find('#name2').val(), 'yellow');

    // Calls on the method for the validation that's created
    // in the PlayersForm.js, when the validation is a succsess the game starts.
    if (this.playersForm.validateInputNames()) {
      this.game = new Game([player1, player2]);
    
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