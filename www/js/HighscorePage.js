
class HighscorePage extends Component {

  constructor(game) {
    super();
    this.addRoute('/highscore', 'topplista');
    this.highscoreList = new HighscoreList(this);
    this.game = game;
  }



  
  addItem() {
    let playerName = 'Player name';
    let playerScore = 'Player score';
    this.highscoreList.addItem(playerName, playerScore);
    this.update();
  }

    addHiScore(playerName, playerScore){
        this.highscoreList.addHiscore(playerName, playerScore);
        this.update();
    }


    update(){
        
        JSON._save('highscore', {data: this});
    }
// addItem() {
// let winnerPlayer = this.game.currentPlayer.name;
// let winnerScore = this.game.CurrentPlayer.moveNumber;
// //let itemName = this.baseEl.find('.btn').val();
// this.highscoreList.addItem(winnerPlayer, winnerScore);
// this.update();
// //this.baseEl.find('.btn').focus();
// }

// addHighscore(winnerName, winnerScore){
//   this.highscoreList.addHighscore(winnerName, winnerScore);
//   this.update();
// }



//   let highscoreList = [];
//   //let input = "winnerform";
//   let input = document.getElementById("input");
//   let winner = (this.baseEl.find('#input').val());
//   console.log('<li>' + winner + '</li>');

//   $(highscoreList).push("#input").val;
// }


//TO DO:
  //what should go into highscore? => name and moves
  //function to catch input name
  //function to limit highscore list' length to max 10
  //function to count number of player moves

  //after game finished add the winnerPlayer + moves to highscoreList
  //moves of winnerPlayer and sort them in the highscorelist 1<10 
}

