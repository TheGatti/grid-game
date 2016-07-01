
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
