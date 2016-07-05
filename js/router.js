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
