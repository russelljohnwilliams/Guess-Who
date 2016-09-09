var React = require('react')
var CharacterSelect = require('./CharacterSelect')
var GuessWho = require('../models/guessWho')

var GuessWhoBox = React.createClass({

  getInitialState: function(){
    
    var sampleData = [{name:'Alfred', hair:'blonde', glasses:'no', beard:'yes', hat:'no', gender: 'male', smile: 'no', glasses: 'no', pic: './src/models/img/alfred.png'}, {name:'Anita', hair:'blonde', glasses:'no', beard:'no', hat:'no', gender: 'female', smile: 'yes', glasses: 'no', pic: './src/models/img/anita.png'}]

    var guessWho = new GuessWho()

    return{guessWho: guessWho}
  },

  handleAttributeSubmit: function(){
    var result = this.state.guessWho.doesCharacterHave(attribute);
    console.log(result);
    this.setState({selectedAccount: result})
  },

  render: function(){
    return(
      <div>
      <h3>Guess Who!</h3>
      <CharacterSelect onAttributeSubmit={this.handleAttributeSubmit}/>
      </div>
      )
  }

})

module.exports = GuessWhoBox