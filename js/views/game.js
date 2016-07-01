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
