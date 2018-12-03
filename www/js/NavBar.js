class NavBar extends Component {

  constructor(){
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Spela', '/play'),
      new NavItem('Spelregler', '/game-rules'),
      new NavItem('Ranklista', '/highscore')
    ];
  }

}