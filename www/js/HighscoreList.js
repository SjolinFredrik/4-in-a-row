class HighscoreList extends Component {

    constructor(page, game) {
        super();
        this.page = page;
        this.game = game;
        this.list = [];
    }

    addToHighscore(name, score) {
        this.list.push(new HighscoreItem(this, name, score));
        this.list.sort(function (a, b) {
            return a.score - b.score;
        });
        if (this.list.length > 10) {
            this.list = this.list.slice(0,9);
        }
        this.page.update();

    }

}
