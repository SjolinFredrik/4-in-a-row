
class HighscorePage extends Component {

  constructor() {
    super();
    this.addRoute('/highscore', 'topplista');
    
    this.highscoreList = new HighscoreList(this);
    
  }


  addToHighscoreList() {
    console.log('hi');
    let list = [];

  } 
}