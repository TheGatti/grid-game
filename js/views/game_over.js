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
