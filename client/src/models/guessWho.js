var _ = require('lodash');

var GuessWho = function(){
  this.charactersArray = [];
  this.chosenCharacter = [];
}

GuessWho.prototype = {

addCharacter: function(character){
  this.charactersArray.push(character);
},


selectACharacter: function(charactersArray){
  character = _.sample(charactersArray);
  return character; 
},

setChosenCharacter: function(){
  this.chosenCharacter = []
  character = this.selectACharacter();
  return character;
  // this.chosenCharacter.push(character);
}



}

module.exports = GuessWho