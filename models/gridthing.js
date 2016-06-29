
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
