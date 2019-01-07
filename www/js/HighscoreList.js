class HighscoreList extends Component {

  constructor(page, name, moves, input) {
    super();
    this.highscoreList = [];
    this.name = name;
    this.moves = moves;
    this.page = page;
    this.input = input;
    this.update();
  }


  update() {
    JSON._save('highscore', { data: this });
  }

}