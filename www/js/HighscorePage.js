
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
        this.render();
        JSON._save('highscore-data', {data: this});
    }
}

