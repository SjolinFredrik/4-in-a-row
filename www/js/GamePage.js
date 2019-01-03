class GamePage extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Spela');
    this.playersForm = new PlayersForm();
    this.addEvents({
      'click radio#computer': 'pickplayerType',
      'click .start-game': 'startGame',

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

  pickPlayerType(){
    let msg = '';
    if (document.name1.player1.value === '') {
       document.name1.player1.focus();
            document.getElementById('player1').style.color = "red";
      alert("You have chosen bot player and fuck this");
      result = true;
      msg += " "+document.name1.player1.value;

      if (msg === "") {
          return result;
      }
      {
        alert(msg)
        return result;
      }
    }
  }
    

unmount(){
  delete this.game;
}
}
