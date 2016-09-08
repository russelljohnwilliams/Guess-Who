var _ = require('lodash');

var GuessWho = function(){
  this.characters = [];
}

GuessWho.prototype = {

addCharacter: function(character){
  this.characters.push(character);
},

characterToGuess: function(characters){
  _.sample(characters, [n]) 
}


}

module.exports = GuessWho