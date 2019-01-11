
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
}

