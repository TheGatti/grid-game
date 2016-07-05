
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
