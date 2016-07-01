let GridModel = require('./models/gridthing');
let GameView = require('./views/game');
let PlayerView = require('./views/new_player');
let PlayerModel = require('./models/playermodel');


module.exports = Backbone.Router.extend({
  initialize: function (){

    /////MODEl
      let myMoves = new GridModel();

      let myPlayer = new PlayerModel();
    ////VIEWS

     this.gamerView = new GameView({
       model: myMoves,
        el:document.getElementById('game')
      });

     this.player = new PlayerView({
       model: myPlayer,
      el:document.getElementById('startMenu')
    });
},

routes: {
  'startthegame': 'newGame',
  'restart': 'tryAgain',
  'smallButton' : 'smallOne',
  'mediumButton' : 'mediumOne',
  'ridiculousButton' : 'ridiculousOne',
  '': 'newGame',

},

   newGame: function() {
      console.log('start the game');
      this.player.el.classList.add('hidden');
      this.gamerView.el.classList.remove('hidden');
  },
   tryAgain: function() {
     console.log('better luck next time');
     this.player.el.classList.add('hidden');
     this.gamerView.el.classList.remove('hidden');
   },
   smallOne: function() {
     console.log('player chose small');
     this.player.el.classList.add('hidden');
     this.gamerView.el.classList.remove('hidden');
   },
   mediumOne: function() {
     console.log('player chose medium');
     this.player.el.classList.add('hidden');
     this.gamerView.el.classList.remove('hidden');
   },
   ridiculousOne: function() {
     console.log('player chose ridiculous');
     this.player.el.classList.add('hidden');
     this.gamerView.el.classList.remove('hidden');
   },
});
