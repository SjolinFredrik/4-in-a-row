class HighscoreList extends Component {

  constructor(page, name, moves) {
    super();
    this.highscoreList = [];
    this.name = name;
    this.moves = moves;
    this.page = page;
    this.update();
  }

  addToHighscoreList(highscoreList) {
    highscoreList.push(highscore);
    
    update();
  }


  update() {
    JSON._save('highscore', { data: this });
  }

}