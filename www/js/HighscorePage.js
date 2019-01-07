
class HighscorePage extends Component {

  constructor() {
    super();
    this.addRoute('/highscore', 'topplista');

    this.addEvents({
      'click submit': 'submitButton'
    });

    this.highscoreList = new HighscoreList;
    this.addToHighscoreList();

  }

  addToHighscoreList() {
    let highscoreList = [];
    //let input = "winnerform";
    let input = document.getElementById("input");
    console.log('<li>' + input + '</li>');

    $(highscoreList).push("name").val;
  }

//TO DO:
  //what should go into highscore? => name and moves
  //function to catch input name
  //function to limit highscore list' length to max 10
  //function to count number of player moves

  //after game finished add the winnerPlayer + moves to highscoreList
  //moves of winnerPlayer and sort them in the highscorelist 1<10 
}

