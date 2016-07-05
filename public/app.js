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
       energy:20,
       moves:0,
       playerType: '',
   },

   up: function () {
     if (this.get('yValue') < 10) {
         this.set('yValue', this.get('yValue') + 1);
       }
       if (this.get('energy') <= 0) {
           this.trigger('gameEnded', this)
       }
      },

   down: function () {
     if (this.get('yValue') > 1) {
         this.set('yValue', this.get('yValue') - 1);
       }
       if (this.get('energy') <= 0) {
           this.trigger('gameEnded', this)
       }
   },

   left: function () {
     if (this.get('xValue') > 1) {
         this.set('xValue', this.get('xValue') - 1);
       }
       if (this.get('energy') <= 0) {
           this.trigger('gameEnded', this)
       }
   },

   right: function () {
     if (this.get('xValue') < 10) {
         this.set('xValue', this.get('xValue') + 1);
       }
       if (this.get('energy') <= 0) {
           this.trigger('gameEnded', this)
       }
  },

  changeMoves: function(){
     this.set('moves', this.get('moves') + 1);
   },

   decreaseEnergy: function(){
     this.set('energy', this.get('energy') - 1 );
   },

   tryAgain: function(){
        this.set(this.defaults);
        this.trigger('startOver', this);
   },
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
let GameOverView = require('./views/game_over');


module.exports = Backbone.Router.extend({
    initialize: function() {

        /////MODEl
        let myMoves = new GridModel();

        let myPlayer = new PlayerModel();
        ////VIEWS

        this.gamerView = new GameView({
            model: myMoves,
            el: document.getElementById('grid-direction')
        });

        this.player = new PlayerView({
            model: myPlayer,
            el: document.getElementById('startMenu')
        });

        this.whoops = new GameOverView({
            model: myMoves,
            el: document.getElementById('gameOver')
        });

        myMoves.on('gameEnded', function(model) {
                this.navigate('gameOverRt', {
                    trigger: true
                })
            },
            this);
        myMoves.on('startOver', function(model) {
            this.navigate('startthegame', {
                trigger: true
            })
        }, this);
    },


    routes: {
        'startthegame': 'newGame',
        'restart': 'tryAgain',
        'smallButton': 'smallOne',
        'mediumButton': 'mediumOne',
        'ridiculousButton': 'ridiculousOne',
        'gameOverRt': 'gameOverFn'

    },

    newGame: function() {
        console.log('start the game');
        this.player.el.classList.add('hidden');
        this.gamerView.el.classList.remove('hidden');
        this.whoops.el.classList.add('hidden');
    },
    tryAgain: function() {
        console.log('better luck next time');
        this.player.el.classList.add('hidden');
        this.gamerView.el.classList.remove('hidden');
        this.whoops.el.classList.add('hidden');
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
    gameOverFn: function() {
        console.log('DONEZO');
        this.gamerView.el.classList.add('hidden');
        this.whoops.el.classList.remove('hidden');
    },
});

},{"./models/gridthing":2,"./models/playermodel":3,"./views/game":5,"./views/game_over":6,"./views/new_player":7}],5:[function(require,module,exports){
module.exports = Backbone.View.extend({
    // 'Constructor' function - what to do at the beginning
    el: '#game',
    initialize: function() {
        this.render();
        this.model.on('change', this.render, this); // this as third arg
    },

    // Event listeners to set up
    events: {
        // 'event-name selector': 'function-to-call'
        'click #up': 'clickUp',
        'click #down': 'clickDown',
        'click #left': 'clickLeft',
        'click #right': 'clickRight',
        'click button': 'changeEnergy'
    },

    clickUp: function() {
        console.log("up, damnit")
        this.model.up();
    },

    clickDown: function() {
        console.log("down, damnit")
        this.model.down();
    },

    clickLeft: function() {
        console.log("left, damnit")
        this.model.left();
    },

    clickRight: function() {
        console.log("right, damnit")
        this.model.right();
    },

    changeEnergy: function() {
        console.log("slow down there, hoss");
        this.model.decreaseEnergy();
        this.model.changeMoves();
    },

    // How to update the DOM when things change
    render: function() {
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

        let grid = this.el.querySelector('#grid_container');
        grid.innerHTML = '';
        for (var yIndex = 10; yIndex > 0; yIndex--) {
            for (var xIndex = 1; xIndex < 11; xIndex++) {
                var newCell = document.createElement("div");
                newCell.classList.add('grid-cell');
                grid.appendChild(newCell);
                if (this.model.get('yValue') === yIndex && this.model.get('xValue') === xIndex) {
                    newCell.setAttribute('id', 'player')
                }
            }
        }

    },
});

},{}],6:[function(require,module,exports){
module.exports = Backbone.View.extend({
    el: '#gameOver',
    initialize: function () {
        this.model.on('change', this.render, this);
    },
    events: {
        'click #new-game': 'newGame',
    },
    newGame: function() {
        this.model.tryAgain();
    },
  });

},{}],7:[function(require,module,exports){
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