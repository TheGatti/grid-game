(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let Router = require('./router');

window.addEventListener('load', function (){

 let newroute = new Router();
 Backbone.history.start();
});

},{"./router":4}],2:[function(require,module,exports){

// Purpose: keep track of DATA related to volume controller
module.exports = Backbone.Model.extend({
  // Initial value for data that the model is responsible for.
   defaults: {
       xValue: Math.floor(Math.random() * 10 + 1),
       yValue: Math.floor(Math.random() * 10 + 1),
       userName:"dude_man",
       energy:10,
       moves:0,
       playerType: '',
   },

   up: function () {
     if (this.get('yValue') < 10) {
         this.set('yValue', this.get('yValue') + 1);
       }
        // this.set("playerEnergy", this.get("playerEnergy") -1);
      },

   down: function () {
     if (this.get('yValue') > 0) {
         this.set('yValue', this.get('yValue') - 1);
       }
        //  this.set("playerEnergy", this.get("playerEnergy") -1);
   },

   left: function () {
     if (this.get('xValue') > 0) {
         this.set('xValue', this.get('xValue') - 1);
       }
        //  this.set("playerEnergy", this.get("playerEnergy") -1);
   },

   right: function () {
     if (this.get('xValue') < 10) {
         this.set('xValue', this.get('xValue') + 1);
       }
        //  this.set("playerEnergy", this.get("playerEnergy") -1);
  },

  changeMoves: function(){
     this.set('moves', this.get('moves') + 1);
   },

   decreaseEnergy: function(){
     this.set('energy', this.get('energy') - 1 );
   }
});

},{}],3:[function(require,module,exports){
module.exports  = Backbone.Model.extend({
  url:'http://localhost:3000/api/players',
  defaults: {
      userName:"dude_man",
      energy:10,
      moves:0,
      score:0
  }
})

},{}],4:[function(require,module,exports){
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

},{"./models/gridthing":2,"./models/playermodel":3,"./views/game":5,"./views/new_player":6}],5:[function(require,module,exports){
module.exports = Backbone.View.extend({
    // 'Constructor' function - what to do at the beginning
    el: '#game',
    initialize: function () {
        this.model.on('change', this.render, this); // this as third arg
    },

    // Event listeners to set up
    events: {
        // 'event-name selector': 'function-to-call'
        'click #up': 'clickUp',
        'click #down': 'clickDown',
        'click #left': 'clickLeft',
        'click #right': 'clickRight',
        'click button' : 'changeEnergy'
    },

    clickUp: function () {
      console.log("up, damnit")
        this.model.up();
    },

    clickDown: function () {
      console.log("down, damnit")
        this.model.down();
    },

    clickLeft: function () {
      console.log("left, damnit")
        this.model.left();
    },

    clickRight: function () {
      console.log("right, damnit")
        this.model.right();
    },

    changeEnergy: function (){
     console.log("slow down there, hoss");
     this.model.decreaseEnergy();
     this.model.changeMoves();
   },

    // How to update the DOM when things change
    render: function () {
      let upButton = this.el.querySelector('#yAxis');
      upButton.textContent = this.model.get('yValue');

     let downButton = this.el.querySelector('#yAxis');
     downButton.textContent = this.model.get('yValue');

     let leftButton = this.el.querySelector('#xAxis');
     leftButton.textContent = this.model.get('xValue');

     let rightButton = this.el.querySelector('#xAxis');
     rightButton.textContent = this.model.get('xValue');

     let energy = this.el.querySelector('#energy');
     energy.textContent = this.model.get('energy');

     let Moves = this.el.querySelector('#moves');
     moves.textContent = this.model.get('moves');
    },
});

},{}],6:[function(require,module,exports){
module.exports = Backbone.View.extend({
 el: '#frontMenu',

  initialize: function (){
   this.model.on('change', this.render,this );
  },


events: {
  'click #small': 'miata',
  'click #medium': 'suburban',
  'click #ridiculous': 'tank',
},

miata:function(){
  console.log("clicked small");

},
suburban:function(){
  console.log("clicked medium");

},
tank:function(){
  console.log("clicked ridiculous");
}
});

},{}]},{},[1])