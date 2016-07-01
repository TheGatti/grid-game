purpose: match the format that the server expects
module.exports = Backbone.Model.extend({

})


//highsore collection
 let HighScore = require ("./highscore");
module.exports = Backbone.Collection.extend ({
  url:"http://grid.queencityiron.com/api/highsore",
  model: HighScore,
});

sendScore: function () {
  let highscore = new HighScore ({
    name: this.get("name"),
    score: this.get ("score"),
    playerType: this.get ("playerType")
  });

  highscore.save();
}

//creating the grid... kind of.
for (let y=0; y < size; y++) {
  //create new section because it's a new row??
  for (let x=0; x < size; x++){
    (x,y)
  }
}

document.createElement(div)
add to section
add section to main

//styling
add class for player and class for energy pod
if (x,y) are = to player, add player class

// collection gets the same url as the high score model
