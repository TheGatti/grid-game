(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let GridModel = require('./models/gridthing');
let GameView = require('./views/game');
let PlayerView = require('./views/new_player');

window.addEventListener('load', function () {
    // Models roll on their own.
    console.log("yo");
    let gmodel = new GridModel();

    // Views like company. They need to know two things:
    //    1. What data do I care about?
    //    2. What DOM elements should I be updating when things change?
    let position = new GameView({
        model: gmodel,
        el: document.getElementById('grid-direction'),
    });

    // let npv = new NowPlayingView({
    //     model: vmodel,
    //     el: document.getElementById('vol-knobs'),
    // });
});

},{"./models/gridthing":2,"./views/game":3,"./views/new_player":4}],2:[function(require,module,exports){

// Purpose: keep track of DATA related to volume controller
module.exports = Backbone.Model.extend({
  // Initial value for data that the model is responsible for.
   defaults: {
       xValue: Math.floor(Math.random() * 10 + 1),
       yValue: Math.floor(Math.random() * 10 + 1),
   },

   up: function () {
     if (this.get('yValue') < 10) {
         this.set('yValue', this.get('yValue') + 1);
       }
    },

   down: function () {
     if (this.get('yValue') > 0) {
         this.set('yValue', this.get('yValue') - 1);
       }
   },

   left: function () {
     if (this.get('xValue') > 0) {
         this.set('xValue', this.get('xValue') - 1);
       }
   },

   right: function () {
     if (this.get('xValue') < 10) {
         this.set('xValue', this.get('xValue') + 1);
       }
  }
});

},{}],3:[function(require,module,exports){
module.exports = Backbone.View.extend({
    // 'Constructor' function - what to do at the beginning
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
    },
});

},{}],4:[function(require,module,exports){


},{}]},{},[1])