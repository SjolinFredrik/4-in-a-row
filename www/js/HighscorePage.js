
class HighscorePage extends Component {

  constructor(game) {
    super();
    this.addRoute('/highscore', 'topplista');
    this.highscoreList = new HighscoreList(this);
    this.game = game;
  }

  addItemtoHighscore() {
    let playerName = 'Player name';
    let playerScore = 'Player score';
    this.highscoreList.addItem(playerName, playerScore);
    this.update();
  }

  addToHighscore(playerName, playerScore) {
    this.highscoreList.addToHighscore(playerName, playerScore);
    this.update();
  }


  update() {
    this.render();
    JSON._save('highscore-data', { data: this });
  }


  //TO DO:
  //what should go into highscore? => name and moves
  //function to catch input name
  //function to limit highscore list' length to max 10
  //function to count number of player moves

  //after game finished add the winnerPlayer + moves to highscoreList
  //moves of winnerPlayer and sort them in the highscorelist 1<10 
}

