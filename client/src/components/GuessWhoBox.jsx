var React = require('react')

var GuessWho = require('../models/guessWho')

var GuessWhoBox = React.createClass({

  getInitialState: function(){
    var game = new GuessWho()

    return{game: game}

  },



  render: function(){
    return(
      <div>
      <h3>Guess Who!</h3>
      </div>
      )
  }

})

module.exports = GuessWhoBox