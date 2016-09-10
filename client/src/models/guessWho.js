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
    if (attribute === this.chosenCharacter[0].name ){
      return "yes, the character is called " + attribute;
    } else {
     return "Sorry, you have chosen incorrectly";
   }
 },

//  doesCharacterHave: function(attribute){
//   var key = this.chosenCharacter[0]
//   if ( key.attribute === 'yes'){
//     return "yes they do";
//   } else if ( key.glasses === 'no'){
//    return "no they do not";
//  }
// },

doesCharacterHave: function(value){
  switch(value){ 
    
  case "blonde":

  if(this.chosenCharacter[0].blonde === true) {
    return "yes";
  } else {
    return "no";
  }
  break;

  case "brown":

  if(this.chosenCharacter[0].brown === true) {
   return "yes";
 } else {
   return "no";
 }
 break;

 case "white":

 if(this.chosenCharacter[0].white === true) {
  return "yes";
} else {
  return "no";
}
break;

case "bald":

if(this.chosenCharacter[0].bald === true) {
 return "yes";
} else {
 return "no";
}
break;

case "glasses":

if(this.chosenCharacter[0].glasses === true) {
  return "yes";
} else {
  return "no";
}
break;

case "beard":

if(this.chosenCharacter[0].beard === true) {
 return "yes";
} else {
 return "no";
}
break;

case "hat":

if(this.chosenCharacter[0].hat === true) {
  return "yes";
} else {
  return "no";
}
break;

case "smile":

if(this.chosenCharacter[0].smile === true) {
 return "yes";
} else {
 return "no";
}
break;

case "female":

if(this.chosenCharacter[0].female === true) {
 return "yes";
} else {
 return "no";
}
break;

case "male":

if(this.chosenCharacter[0].male === true) {
 return "yes";
} else {
 return "no";
}
break;


}

}




}

module.exports = GuessWho