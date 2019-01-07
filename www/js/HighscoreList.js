class HighscoreList extends Component {

  constructor(page, name) {
    super();
    this.highscoreList = [];
    this.name = name;
    this.page = page;
    this.update();
  }


  update() {
    JSON._save('highscore', { data: this });
  }

}