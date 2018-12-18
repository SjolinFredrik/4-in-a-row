class GamePage extends Component {

  constructor(){
    super();
    this.addRoute('/play', 'Spela');
    this.playersForm = new PlayersForm();
    this.addEvents({
      'click .radio-btn': 'playerType',
      'click .start-game': 'startGame'
       
    });
    Store.gamePage = this;
  }

  //Check type (human or bot)
      
/*
    if(this.currentPlayer === 0) {
      return this.player1.type;
    }
    if(this.currentPlayer === 1) {
      return this.player2.type;
    
    }
  }

  checkIfTwoBot(){
    if(this.player1.type === 'computer' && this.player2.type === 'computer'){
      return true;
    }
  }
/*
  async runTwoBot(){
    while(!this.winner){
      await this.sleep(1000)
      this.fall2(Math.floor(Math.random()*7));
    }         
  }
  */

  // create a method to start the game with 2 players, and put them
  // into one array So Game.js can catch this object.
  startGame(){
    let player1 = new Player(this.baseEl.find('#name1').val(), 'red');
    let player2 = new Player(this.baseEl.find('#name2').val(), 'yellow');
    this.game = new Game([player1, player2]);
    Store.navbar.showingCancelButton = true;
    Store.navbar.render();
    this.render();
  }

  unmount(){
    delete this.game;
  }
}

