var _ = require('lodash');


var GuessWho = function(){
  this.charactersArray = [];
  this.chosenCharacter = [];
}

GuessWho.prototype = {

addCharacter: function(character){
  this.charactersArray.push(character);
},

selectTheGameCharacter: function(){
  character = _.sample(this.charactersArray);
  this.addCharacterToChosenCharacterArray(character);
},

addCharacterToChosenCharacterArray: function(character){
  this.chosenCharacter.push(character);
},
 
 getChosenCharacter: function(){
  return this.chosenCharacter.pop();
 },

 isTheCharacter: function(attribute){
  if (this.chosenCharacter[0].name === attribute){
    return "yes, the character is called " + attribute
    } else {
      "Sorry, you have chosen incorrectly"
  }
 }

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