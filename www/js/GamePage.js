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
 playerType(){
 
    if(this.baseEl.find('#name1').val() === 'choose-playerOne...' || this.baseEl.find('#name2').val() === 'choose-playerTwo...'){
        throw 'You must choose types'; 
    }
    if(this.baseEl.find('#player1').val() === 'computer'){
      this.baseEl.find('#name1').val('Computer1');
    }
    if(this.baseEl.find('#player2').val() === 'computer'){
      this.baseEl.find('#name2').val('Computer2');
    }

    let player1name= this.baseEl.find('#name1').val();
    let player1nameIsValid = this.inputValidation(player1name);
    
    let player1name = this.baseEl.find('#name2').val();
    let player2nameIsValid = this.inputValidation(player2name);

    if(player1nameIsValid && player2nameIsValid){
      this.player1 = (this.baseEl.find('#player1').val() === 'human')? (new
        Player(this.baseEl.find('#player1').val(), 1)) : (new Bot(1));
      
      this.player2 = (this.baseEl.find('#player2').val() === 'human')? (new
        Player(this.baseEl.find('#player2').val(), 2)) : (new Bot(2));
        this.playerType(this.player1, this.player2);
     } 
     else {
       alert("Names must be 2-10 letters, bitch");
     }
  }
  playerType(){

  };

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
inputValidation(name){
  let alpha  = 'abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let nrOfSigns = 0; // keep track how many times you loop through the name from the input
  for (let j = 0; j < name.length; j++) { // loops through the name from the player
    if (alpha.includes(name[j])) { // if the inputs signs includes alpha
      nrOfSigns++; // we increment this variabel. When all the signs are finish ex'f+a+n+n+y'
      // it moves on to the if statement on line 51
    }
  }
  if (nrOfSigns < 2 || nrOfSigns > 10) {
    return false;
  } else {
    return true;
  }
}
}


