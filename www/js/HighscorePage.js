
class HighscorePage extends Component {

  constructor() {
    super();
    this.addRoute('/highscore', 'topplista');
  
    this.highscoreList = new HighscoreList(this);

  }
  countPlayerMoves(){
    for(i = 0; i < 21; i++){
      count++
    }
  }

  addListItem() {
    console.log('hi');
    let winnerName; 
    let playerMoves = countPlayerMoves();

    this.highscoreList.addListItem(winnerName, playerMoves);
    this.update();
   
  }
  
  addHighscore(playerName, playerMoves){
    this.highscoreList.addHighscore(playerName, playerMoves);
    this.update();
  }



  update() {
    console.log('hi');
    //this.render();
    // optional to save all data to json
    JSON._save('highscore.json', { data: this });
  }

}



  //get what's written in the input field and add to the list
  //highscoreList = submit(input) {
  //  output = <li> name  + moves </li>


