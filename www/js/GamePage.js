class GamePage extends Component {

  constructor(){
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
  startGame(){
    let player1= new Player(this.baseEl.find('#name1').val() === 'human', 'red') ? (new
      Player(this.baseEl.find('#name1').val(), 0)) : (new Bot(0));
    let player2 = new Player(this.baseEl.find('#name2').val() === 'human', 'yellow') ? (new
      Player(this.baseEl.find('#name2').val(), 1)) : (new Bot(1));
    if (this.playersForm.validateInputNames()) {
    this.game = new Game([player1, player2]);
    Store.navbar.showingCancelButton = true;
    Store.navbar.render();
    this.render();
  }
}
  unmount(){
    delete this.game;
  }

}

