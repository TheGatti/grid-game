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
