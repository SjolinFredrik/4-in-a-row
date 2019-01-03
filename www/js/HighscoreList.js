class HighscoreList extends Component {

  constructor(page){
    super();
    this.page = page;
    this.highscoreItems = [];
  }

  addHighscoreWinner(name){
    this.highscoreItem.push(new HighscoreItem(this, name, moves));
  }

  removeHighscoreItem(highscoreItem){
    this.highscoreItem.splice(this.highscoreItems.indexOf(highscoreItem), 1);
    this.page.update();
  }
}