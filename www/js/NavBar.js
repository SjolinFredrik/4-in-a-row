class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Spela', '/play'),
      new NavItem('Spelregler', '/game-rules'),
      new NavItem('Ranklista', '/highscore')
    ];
    this.showingCancelButton = false;
    this.addEvents({
      //"click li:contains(Spela)": 'showCancelButton',
      "click .cancel-button" : 'hideCancelButton'
    });
    Store.navbar = this;
  }
  
  /*showCancelButton() {    
    this.showingCancelButton = true;
    this.render();
  }*/

  hideCancelButton() {
    this.showingCancelButton = false;
     this.render();
     if(Store.gamePage){
       // delete the property game from the game page
       // (this forces it to show it's form again)
       delete Store.gamePage.game;
       Store.gamePage.render();
     }
  }
  
}
