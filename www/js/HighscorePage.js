
class HighscorePage extends Component {

  constructor() {
    super();
    this.addRoute('/highscore', 'topplista');
    this.addEvents({
      'click .submit-btn': 'submitBtn',
      'keyup .input': 'addInputOnEnter'
    });
    this.highscoreList = new List(this);
   // Store.highscoreList = this;
    
  }  
  
    addWinner(){
      console.log('hi');
      let winnerName = this.baseEl.find('.input').val();
      this.highscoreList.addWinner(winnerName);
      this.update();
      this.baseEl.find('.input').focus();
    }
  
    addWinnerOnEnter(e){
      if(e.which === 13){
        this.addWinner();
      }
    }
  
    update(){
      this.render();
      // optional to save all data to json
      JSON._save('highscore-data', {data: this});
    }
  
  }



  //get what's written in the input field and add to the list
  //highscoreList = submit(input) {
  //  output = <li> name  + moves </li>


