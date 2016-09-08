var _ = require('lodash');


var GuessWho = function(){
  this.charactersArray = [];
  this.chosenCharacter = [];
}

GuessWho.prototype = {

addCharacter: function(character){
  this.charactersArray.push(character);
},

setTheGameCharacter: function(){
  character = _.sample(this.charactersArray);
  this.chosenCharacter.push(character);
},
 
 getChosenCharacter: function(){
  return this.chosenCharacter.pop();
 }


}

module.exports = GuessWho