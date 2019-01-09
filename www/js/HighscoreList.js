class HighscoreList extends Component {

  constructor(page, game) {
    super();
    //this.name = name;
    this.page = page;
    this.game = game;
    this.items = [];
  }

  addItem(name) {
    this.items.push(new HighcoreItem(this, name, moves));
  }
}