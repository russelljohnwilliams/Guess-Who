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
    var character = _.sample(this.charactersArray);
    this.addCharacterToChosenCharacterArray(character);
  },

  addCharacterToChosenCharacterArray: function(character){
    this.chosenCharacter.unshift(character);
  },

  getChosenCharacter: function(){
    return this.chosenCharacter.pop();
  },

  isTheCharacter: function(attribute){
    attribute = _.toString(attribute);
    if (attribute === this.chosenCharacter[0].name ){
      console.log("yes, the character is called" + attribute);
      return "yes, the character is called " + attribute;
    } else {
      console.log("Sorry, you have chosen incorrectly");
      return "Sorry, you have chosen incorrectly";
    }
  },

  doesCharacterHave: function(value){
    
console.log(value)

    value = _.toString(value)
console.log(value)

    switch(value){ 
      case "blonde":

      if(this.chosenCharacter[0].blonde === true) {
        // return "Yes, they do have blonde hair.";
        console.log("Yes, they do have blonde hair.");
      } else {
        // return "Nope, they don't have blonde hair.";
        console.log("Nope, they don't have blonde hair.");
      }
      break;

      case "brown":

      if(this.chosenCharacter[0].brown === true) {
        return "Yes, they do have brown hair.";
      } else {
        // return "Nope, they don't have brown hair actually.";
        console.log("Nope, they don't have brown hair actually.")
      }
      break;

      case "white":

      if(this.chosenCharacter[0].white === true) {
        return "Yup, they got's the white hair.";
      } else {
        return "White? White hair? No I don't think so.";
      }
      break;

      case "bald":

      if(this.chosenCharacter[0].bald === true) {
        return "Haa haa! Yeah, the poor sod is a baldy.";
      } else {
        return "Nope, not that unlucky.";
      }
      break;

      case "glasses":

      if(this.chosenCharacter[0].glasses === true) {
        return "Yes, they have a very fetching pair of spectacles.";
      } else {
        return "Nope, they don't wear glasses.";
      }
      break;

      case "beard":

      if(this.chosenCharacter[0].beard === true) {
        return "Yeah, stupid hipster.";
      } else {
        return "Nah, they have a face as smooth as a baby's bottom.";
      }
      break;

      case "hat":

      if(this.chosenCharacter[0].hat === true) {
        return "Yes, they are indeed wearing a hat.";
      } else {
        return "No hat today.";
      }
      break;

      case "smile":

      if(this.chosenCharacter[0].smile === true) {
        return "A big bright beautiful smile is plastered all over their face.";
      } else {
        return "Hmmm, is it a frown, perhaps a grimace. Whatever it is, it's not a smile.";
      }
      break;

      case "female":

      if(this.chosenCharacter[0].female === true) {
        return "She may not be a lady, but she's all woman.";
      } else {
        return "That's no lady... that's a man!";
      }
      break;

      case "male":

      if(this.chosenCharacter[0].male === true) {
        return "A man? yes, technically.";
      } else {
        return "That aint no man... Definately a woman, born that way or not.";
      }
      break;

    }
  }

//  doesCharacterHave: function(attribute){
//   var key = this.chosenCharacter[0]
//   if ( key.attribute === 'yes'){
//     return "yes they do";
//   } else if ( key.glasses === 'no'){
//    return "no they do not";
//  }
// },

}

module.exports = GuessWho