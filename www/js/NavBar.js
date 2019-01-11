class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Spela', '/play'),
      new NavItem('Spelregler', '/game-rules'),
      new NavItem('Topplista', '/highscore')
    ];
    this.showingCancelButton = false;
    this.addEvents({
      "click .cancel-button": 'hideCancelButton'
    });
    Store.navbar = this;
  }

  hideCancelButton() {
    this.showingCancelButton = false;
    this.render();
    if (Store.gamePage) {
      // delete the property game from the game page
      // (this forces it to show it's form again)
      delete Store.gamePage.game;
      Store.gamePage.render();
    }
  }

}
