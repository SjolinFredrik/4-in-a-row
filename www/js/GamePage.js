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
    let playerOneType = $("input[type='radio'][name='player1']:checked").val();
    console.log('player1', playerOneType);
    let playerTwoType = $("input[type='radio'][name='player2']:checked").val();
    console.log('player2', playerTwoType);
    let player1Name = this.baseEl.find('#name1').val();
    console.log(player1Name);
    let player2Name = this.baseEl.find('#name2').val();
    console.log(player2Name);
    let player1 = new Player(player1Name, 'red', playerOneType);
    let player2 = new Player(player2Name, 'yellow', playerTwoType);

    // if (this.baseEl.find('#computer1').val()) {
    //   console.log('value:', this.baseEl.find('#computer1').val())
    //   console.log("redbot");
    //   player1 = new Player(this.baseEl.find('#name1').val(), 'red', false);
    // } else {
    //   console.log("redhuman");
    //   player1 = new Player(this.baseEl.find('#name1').val(), 'red', true);
    // }
    // if (this.baseEl.find('#computer2').val(), 'Bot2') {
    //   player2 = new Player(this.baseEl.find('#name2').val(), 'yellow', false);
    //   console.log("yellobot");

    // } else {
    //   console.log("yeowhuman");
    //   player2 = new Player(this.baseEl.find('#name2').val(), 'yellow', true);
    // }

    // Calls on the method for the validation that's created
    // in the PlayersForm.js, when the validation is a succsess the game starts.
   // if (this.playersForm.validateInputNames()) {
      this.game = new Game([player1, player2]);

      //adding navbar to Store variable to temporarilly store navbar 
      Store.navbar.showingCancelButton = true;
      Store.navbar.render();
      this.render();

    }
  

  unmount() {
    delete this.game;
  }
}

