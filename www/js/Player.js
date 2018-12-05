class Player extends Component {

  constructor() {
    super();

    this.playerNameOne = playerNameOne;
    this.playerNameTwo = playerNameTwo;

    this.botOne = botOne;
    this.botTwo = botTwo;
    
    // Click event to add a player from the input page.
    this.addEvents({
      'click .add-player-btn': 'addPlayer'
    });
  }
}