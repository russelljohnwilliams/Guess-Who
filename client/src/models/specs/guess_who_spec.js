var GuessWho = require('../guessWho');
var Character = require('../character');
var assert = require('chai').assert;
var mocha = require('mocha');

describe('guessWho', function(){
  

  beforeEach(function(){
    guessWho = new GuessWho();
    frank = new Character({name:'Frank', hair:'yes', glasses:'no', beard:'no', hat:'yes'});
    barbara = new Character({name:'Barbara', hair:'yes', glasses:'yes', beard:'yes', hat:'no'});
  });

  it('Has an empty game array at start ', function(){
    assert.equal(0, guessWho.characters.length);
  });

  it('Can add characters to the game array', function(){
    
 

    guessWho.addCharacter(frank);
    
    guessWho.addCharacter(barbara);
    
    assert.equal(2, guessWho.characters.length);

  })

})