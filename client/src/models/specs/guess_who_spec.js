var GuessWho = require('../guessWho');
var Character = require('../character');
var assert = require('chai').assert;
var mocha = require('mocha');

describe('guessWho', function(){
  

  beforeEach(function(){
    guessWho = new GuessWho();
    frank = new Character({name:'Frank', hair:'yes', glasses:'no', beard:'no', hat:'yes'});
    barbara = new Character({name:'Barbara', hair:'yes', glasses:'yes', beard:'yes', hat:'no'});
    guessWho.addCharacter(frank);
    guessWho.addCharacter(barbara);
  });


  it('Can add characters to the game array', function(){
    assert.equal(2, guessWho.charactersArray.length);
  })

// this test works!
  it('Can return random character from array (can not test this)', function(){
    character = guessWho.characterToGuess(guessWho.charactersArray);
    console.log("randomly selected character is: ", character.name);
  })

})