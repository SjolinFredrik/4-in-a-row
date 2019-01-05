class PageContent extends Component {

  constructor(){
    super();
    this.startPage = new StartPage();
    this.gamePage = new GamePage();
    this.highscorePage = new HighscorePage();
    this.missingPage = new MissingPage();
    this.rulePage = new RulePage();
    
    this.loadHighscoreData();
}

  async loadHighscoreData(){
    // optional, this is if we want to load data from a JSON file
   JSON._classes(HighscorePage, HighscoreList);
   let response = await JSON._load('highscore.json');
   console.log(response);
   if(response === null){ return; }
   // set the original id of highscorePage
   // to get things into the "rendering loop"
   response.data._id = this.highscorePage._id;
   this.highscorePage.highscoreList = response.data.highscoreList;
   this.highscorePage.render();
 }
}