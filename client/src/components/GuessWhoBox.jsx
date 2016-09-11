var React = require('react')
var CharacterSelect = require('./CharacterSelect')
var CharacterGuess = require('./CharacterGuess')
var GuessResponse = require('./GuessResponse')
var CharacterPictures = require('./CharacterPictures')
var GuessWho = require('../models/guessWho')



var GuessWhoBox = React.createClass({

  getInitialState: function(){

    var guessWho = new GuessWho()

    // guessWho.addCharacter(sampleData[0])
    // guessWho.addCharacter(sampleData[1])
    // guessWho.addCharacter(sampleData[2])
    // guessWho.addCharacter(sampleData[3])
    // guessWho.addCharacter(sampleData[4])
    // guessWho.addCharacter(sampleData[5])
    // guessWho.addCharacter(sampleData[6])
    // guessWho.addCharacter(sampleData[7])
    // guessWho.addCharacter(sampleData[8])
    // guessWho.addCharacter(sampleData[9])
    // guessWho.addCharacter(sampleData[10])
    // guessWho.addCharacter(sampleData[11])
    // guessWho.addCharacter(sampleData[12])
    // guessWho.addCharacter(sampleData[13])
    // guessWho.addCharacter(sampleData[14])
    // guessWho.addCharacter(sampleData[15])

    return{guessWho: guessWho, characters:sampleData, comment:null}
  },


  setGameCharacter: function(){
    var characters = this.state.guessWho.charactersArray
    console.log("weehey", characters)
    this.state.guessWho.selectTheGameCharacter(characters)
  },

  startGame: function(){
    var i = 0
    for (i = 0; i < 3; i++){
      // console.log(sampleData[i].name)
    this.guessWho.addCharacter(sampleData[i])
    }
    this.setGameCharacter()
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
    var comment = this.state.guessWho.isTheCharacter(attribute)
    this.setState({comment: comment})
  },

  render: function(){
    return(
      <div className="gameBox">
      <header>
      <img src="img/guessWho.png" className="logo"/>
      <h3>GUESS WHO!</h3>
      <button onClick={this.startGame} className="button"> start new game </button> 
      </header> 
      <p>let's narrow it down a bit.</p>
      <CharacterSelect onAttributeSubmit={this.handleAttributeSubmit}/>
      <GuessResponse comment={this.state.comment}/>
      <CharacterGuess characters={this.state.characters} onGuessSubmit={this.handleGuessSubmit}/>    
      <CharacterPictures characters={this.state.characters}/>

      </div>
      )
  }

})

var sampleData = [

{name:'Alex',
blonde:false, 
brown: true,
white: false,
bald: false,
glasses:false, 
beard:true, 
hat:false,  
smile:true, 
female: false,
male: true,
image: './img/alex.png'},

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
image: './img/anita.png'},

{name:'Anne',
blonde:false, 
brown: true,
white: false,
bald: false,
glasses:false, 
beard:false, 
hat:false,  
smile:false, 
female: true,
male: false,
image: './img/anne.png'},

{name:'Bernard',
blonde:false, 
brown: true,
white: false,
bald: false,
glasses:false, 
beard:false, 
hat:true,  
smile:false, 
female: false,
male: true,
image: './img/bernard.png'},

{name:'Bill',
blonde:false, 
brown: false,
white: false,
bald: true,
glasses:false, 
beard:true, 
hat:false,  
smile:true, 
female: false,
male: true,
image: './img/bill.png'},

{name:'Charles',
blonde:true, 
brown: false,
white: false,
bald: false,
glasses:false, 
beard:true, 
hat:false,  
smile:true, 
female: false,
male: true,
image: './img/charles.png'},

{name:'Claire',
blonde:true, 
brown: false,
white: false,
bald: false,
glasses:true, 
beard:false, 
hat:true,  
smile:true, 
female: true,
male: false,
image: './img/claire.png'},

{name:'David',
blonde:true, 
brown: false,
white: false,
bald: false,
glasses:false, 
beard:true, 
hat:false,  
smile:true, 
female: false,
male: true,
image: './img/david.png'},

{name:'Eric',
blonde:true, 
brown: false,
white: false,
bald: false,
glasses:false, 
beard:false, 
hat:true,  
smile:true, 
female: false,
male: true,
image: './img/eric.png'},

{name:'Frans',
blonde:true, 
brown: false,
white: false,
bald: false,
glasses:false, 
beard:false, 
hat:false,  
smile:true, 
female: false,
male: true,
image: './img/frans.png'},

{name:'George',
blonde:false, 
brown: false,
white: true,
bald: false,
glasses:false, 
beard:false, 
hat:true,  
smile:false, 
female: false,
male: true,
image: './img/george.png'},

{name:'Herman',
blonde:false, 
brown: false,
white: false,
bald: true,
glasses:false, 
beard:false, 
hat:false,  
smile:true, 
female: false,
male: true,
image: './img/herman.png'},

{name:'Joe',
blonde:true, 
brown: false,
white: false,
bald: false,
glasses:true, 
beard:false, 
hat:false,  
smile:true, 
female: false,
male: true,
image: './img/joe.png'},

{name:'Maria',
blonde:false, 
brown: true,
white: false,
bald: false,
glasses:false, 
beard:false, 
hat:true,  
smile:true, 
female: true,
male: false,
image: './img/maria.png'},

{name:'Max',
blonde:false, 
brown: true,
white: false,
bald: false,
glasses:false, 
beard:true, 
hat:true,  
smile:true, 
female: false,
male: true,
image: './img/max.png'},

]

module.exports = GuessWhoBox