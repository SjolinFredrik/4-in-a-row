class HighscoreList extends Component {

  constructor(page) {
    super();
    this.page = page;
    this.items = [];
  }

  countPlayerMoves(){
    for(i = 0; i < 21; i++){
      return count++;
      
    }
  }
  addHighscore(winnerName, winnerMoves) {

    if (this.items.length < 10) {
      this.items.push(new Item(this, winnerName, winnerMoves));
    }
    else {
      let lastInList = this.items.length - 1;
      let lastInListMoves = this.items[lastInList].moves;

      if (moves <= lastInListMoves && this.items.length <= 10) {

        for (let i = 0; i <= this.items.length - 1; i++) {

          if (this.items[i].moves >= moves) {

            let newIndex = this.items.indexOf(this.items[i])
            i = this.items.length;

            this.items.splice(newIndex, 0, new Item(this, name, moves));
          }
        }
      }

      if (this.items.length > 10) {
        this.removeHighscore(lastInList);
      }
    }
  }

  removeHighscore(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.page.update();
  }
}