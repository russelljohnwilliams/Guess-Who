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

// selectACharacter: function(){
//   random = _.random(0, this.charactersArray.length)
//   // this.charactersArray = _.shuffle(charactersArray);
//   return _.pullAt(this.charactersArray, random);
//   // this.chosenCharacter.push(character);
//   // return character; 
// },

// setChosenCharacter: function(){
//   character = this.selectACharacter();
//   this.chosenCharacter.push(character);
// },
 
 getChosenCharacter: function(){
  return this.chosenCharacter.pop();
 }


}

module.exports = GuessWho