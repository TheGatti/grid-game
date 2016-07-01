let Router = require('./router');

window.addEventListener('load', function (){

 let newroute = new Router();
 Backbone.history.start();
});
