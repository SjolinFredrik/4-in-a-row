class PlayersForm extends Component {

  constructor() {
    super();
    this.addEvents({
      'change .untouched': 'changeColor',
      'keydown input[type="text"]': 'resetValidity',
      //'click keydown input[type="radio"]': 'radioPlayerType',
    });
  }
  /*******************************VALIDATION OF INPUT NAMES*******************************/

  // This method is made cause otherwise setCustomValidity in the validateInputNames
  // things it's a permanent msg and won't get away even if you type in the right name
  resetValidity() {
    this.baseEl.find('input[type="text"]').each(function () {
      this.setCustomValidity('');
    });
  }
  // Remove the grey color from the input field when it is targeted.
  changeColor(e) {
    $(e.target).removeClass('untouched')
  }

  // method called upon at the GamePage.js
  // Here the validation starts.
  validateInputNames() {
    // Find the id class in the input tag
    let input = document.getElementById('name1');
    let playerOne = this.baseEl.find('#name1').val();
    let input2 = document.getElementById('name2');
    let playerTwo = this.baseEl.find('#name2').val();

    if (playerOne.length < 2 || playerOne.length > 10) {
      // Erase the class pattern pre-installed msg. And use the devs choice.
      input.oninvalid = function (event) {
        event.target.setCustomValidity('Du får bara använda 2-10 bokstäver!');
      }
    }
    if (playerTwo.length < 2 || playerTwo.length > 10) {
      input2.oninvalid = function (event) {
        event.target.setCustomValidity('Du får bara använda 2-10 bokstäver!');
      }
    }
    if ((playerOne.length > 1 && playerOne.length < 11) && (playerTwo.length > 1 && playerTwo.length < 11)) {
      return true;
    }
    return false;
  }
}

/* radioPlayerType(e){
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13) {
      document.getElementsByName('radio').click();
      return true;
  }
    return false;
  }

*/