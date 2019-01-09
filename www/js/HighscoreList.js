class HighscoreList extends Component {

  constructor(page) {
    super();
    //this.name = name;
    this.page = page;
    this.items = [];
  }

  addItem(name) {
    this.items.push(new HighcoreItem(this, name, moves));
  }
}