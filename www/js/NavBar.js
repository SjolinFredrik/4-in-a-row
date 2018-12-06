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
      "click [data-instance-id=3]": 'showCancelButton',
      "click .cancel-button" : 'hideCancelButton'

    })
  }
  
  showCancelButton() {    
    this.showingCancelButton = true;
    this.render();
  }

  hideCancelButton() {
    this.showingCancelButton = false;
     this.render();
  }
  
}
