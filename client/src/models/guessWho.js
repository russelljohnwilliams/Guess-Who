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
 },

 // doesCharacterHaveAHat: function(){
 //  if ( === "hat"){
 //    return "Yes, the character does indeed have a hat"
 //  }
 //  else{
 //    return "No, I'm sad to say the character does not have a hat"
 //  }
 // }


}

module.exports = GuessWho