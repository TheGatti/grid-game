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
