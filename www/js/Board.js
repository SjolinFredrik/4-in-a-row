class Board extends Component {


  constructor() {
    super();
    this.markers = [];
    this.renderBoard();

  }
  renderBoard() {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        this.markers.push(new Marker(row, col));
      }
    }
  }

  onmarkerClick(){
    
  }


}