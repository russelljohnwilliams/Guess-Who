var React = require('react')
var CharacterSelect = require('./CharacterSelect')
var CharacterGuess = require('./CharacterGuess')
var CharacterPictures = require('./CharacterPictures')
var GuessWho = require('../models/guessWho')

var sampleData = [
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
image: './img/alfred.png'},

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
image: './img/anita.png'}]

var GuessWhoBox = React.createClass({

  getInitialState: function(){

    var guessWho = new GuessWho()

    guessWho.addCharacter(sampleData[0])
    guessWho.addCharacter(sampleData[1])

    return{guessWho: guessWho, characters:sampleData}
  },

  setGameCharacter: function(){
    var characters = this.state.guessWho.charactersArray
    this.state.guessWho.selectTheGameCharacter(characters)
  },

  handleAttributeSubmit: function(attribute){

    // var result = this.state.guessWho.doesCharacterHave(attribute);
    this.state.guessWho.doesCharacterHave(attribute)
    // this.setState({selectedAccount: result})
  },

  handleGuessSubmit: function(attribute){
    console.log("attribute is :", attribute)
    this.state.guessWho.isTheCharacter(attribute)
  },

  render: function(){
    return(
      <div>
      <img src="img/guessWho.png"/>
      <h3>Guess Who!</h3>
  


      <CharacterPictures characters={this.state.characters}/>
      <button onClick={this.setGameCharacter} className="button"> start new game </button> 
      <CharacterSelect onAttributeSubmit={this.handleAttributeSubmit}/>
      <CharacterGuess characters={this.state.characters} onGuessSubmit={this.handleGuessSubmit}/>
      </div>
      )
  }

})

module.exports = GuessWhoBox