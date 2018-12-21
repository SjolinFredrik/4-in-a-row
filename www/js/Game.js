class Game extends Component {

  // players catches the created array in gamepage
  constructor(players, color) {
      super();
      this.players = players;
      //this.currentPlayer = players[0];
      //this.showPlayer = this.currentPlayer.name;
      this.choosePlayerType();
      this.changePlayer();
      this.board = new Board(this);
      
    }
    choosePlayerType(){ 
      let type= document.getElementById('computer');
        if(this.baseEl.find('#name1').val() === 'computer'){
          this.baseEl.find('#computer').val('AI1', 'red');
        }
      let type2 = document.getElementById('computer');
        if(this.baseEl.find('#name2').val() === 'computer'){
          this.baseEl.find('#computer').val('AI2', 'yellow');
        }
      }

    changePlayer(){
      this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0]; 
      this.showPlayer = this.currentPlayer.name && this.currentPlayer.option;
      this.render();
  }
    }
  