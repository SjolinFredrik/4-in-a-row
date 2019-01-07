class Player extends Component {

  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
    this.moveNumber = 1;

    //setting default that the player is human
    //if bot - then false
    this.isHuman = true;
  }
}