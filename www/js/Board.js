class Board extends Component {

  super();
  constructor() {

    let markers = [];
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        markers.push(new Marker(row, col));
      }
    }

  }
}