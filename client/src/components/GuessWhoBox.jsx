var React = require('react')
var CharacterSelect = require('./CharacterSelect')
var CharacterGuess = require('./CharacterGuess')
var GuessResponse = require('./GuessResponse')
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

    return{guessWho: guessWho, characters:sampleData, comment:null}
  },

  setGameCharacter: function(){
    var characters = this.state.guessWho.charactersArray
    this.state.guessWho.selectTheGameCharacter(characters)
  },

  setCurrentCountry: function(country){
    this.setState({currentCountry: character})
  },

  handleAttributeSubmit: function(attribute){
    var comment = this.state.guessWho.doesCharacterHave(attribute)
    console.log("comment =", comment)
    this.setState({comment: comment})
  },

  handleGuessSubmit: function(attribute){
    this.state.guessWho.isTheCharacter(attribute)

  },

  render: function(){
    return(
      <div className="gameBox">
      <header>
      <img src="img/guessWho.png" className="logo"/>
      <h3>GUESS WHO!</h3>
      <button onClick={this.setGameCharacter} className="button"> start new game </button> 
      </header> 
      <br/>
      <p>let's narrow it down a bit</p><br/>
      <CharacterSelect onAttributeSubmit={this.handleAttributeSubmit}/>
      <p>take a guess</p><br/>
      <CharacterGuess characters={this.state.characters} onGuessSubmit={this.handleGuessSubmit}/>
      <br/>
      <GuessResponse comment={this.state.comment}/>
      <div>
      <CharacterPictures characters={this.state.characters}/>
</div>
      </div>
      )
  }

})

module.exports = GuessWhoBox