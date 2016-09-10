var React = require('react')
var CharacterSelect = require('./CharacterSelect')
var GuessWho = require('../models/guessWho')

var GuessWhoBox = React.createClass({

  getInitialState: function(){

    var characters = [
    {name:'Alfred',
    blonde: true, 
    brown: false,
    white: false,
    bald: false,
    glasses: false, 
    beard: true, 
    hat: false,  
    smile: false, 
    female: false,
    male: true,
    pic: './src/models/img/alfred.png'},
    
    {name:'Anita',
    blonde:true, 
    brown: false,
    white: false,
    bald: false,
    glasses:false, 
    beard:false, 
    hat:false,  
    smile:true, 
    female: true,
    male: false,
    pic: './src/models/img/anita.png'}]

    var guessWho = new GuessWho()

    return{guessWho: guessWho}
  },

  setGameCharacter: function(){
    var characters = this.state.guessWho.characters
    console.log(characters)
    // this.state.guessWho.selectTheGameCharacter(characters)
    console.log("character is", this.state.guessWho.chosenCharacter[0])
  },

  handleAttributeSubmit: function(attribute){
    
    // var result = this.state.guessWho.doesCharacterHave(attribute);
    console.log("Handle this here attribute", attribute)
    this.state.guessWho.doesCharacterHave(attribute)
    // this.setState({selectedAccount: result})
  },

  render: function(){
    return(
      <div>
      <h3>Guess Who!</h3>
      <button onClick={this.setGameCharacter} className="button"> start new game </button> 
      <CharacterSelect onAttributeSubmit={this.handleAttributeSubmit}/>
      </div>
      )
  }

})

module.exports = GuessWhoBox