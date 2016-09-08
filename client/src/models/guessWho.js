var _ = require('lodash');

var GuessWho = function(){
  this.charactersArray = [];
}

GuessWho.prototype = {

addCharacter: function(character){
  this.charactersArray.push(character);
},

characterToGuess: function(charactersArray){
  character = _.sample(charactersArray);
  return character; 
}


}

module.exports = GuessWho