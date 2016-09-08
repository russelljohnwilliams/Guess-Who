var GuessWho = require('../guessWho');
var Character = require('../character');
var assert = require('chai').assert;
var mocha = require('mocha');
var _ = require('lodash');


describe('guessWho', function(){
  

  beforeEach(function(){
    guessWho = new GuessWho();
    frank = new Character({name:'Frank', hair:'yes', glasses:'no', beard:'no', hat:'yes'});
    barbara = new Character({name:'Barbara', hair:'yes', glasses:'yes', beard:'yes', hat:'no'});    
    gerry = new Character({name:'gerry', hair:'yes', glasses:'no', beard:'no', hat:'yes'});
    glen = new Character({name:'glen', hair:'yes', glasses:'yes', beard:'yes', hat:'no'});    
    deb = new Character({name:'deb', hair:'yes', glasses:'no', beard:'no', hat:'yes'});
    roy = new Character({name:'roy', hair:'yes', glasses:'yes', beard:'yes', hat:'no'});
    guessWho.addCharacter(frank);
    guessWho.addCharacter(barbara);  
    guessWho.addCharacter(gerry);
    guessWho.addCharacter(glen);  
    guessWho.addCharacter(deb);
    guessWho.addCharacter(roy);  
  });


  it('Can add characters to the game array', function(){
    assert.equal(6, guessWho.charactersArray.length);
  })

// this test works  !
  it('Can return random character from array (can not test this)', function(){
    guessWho.setTheGameCharacter();
    console.log("randomly selected character is: ", guessWho.chosenCharacter[0].name);
  })

// this test works  !
  it("can get chosen character name from array", function(){
    guessWho.setTheGameCharacter();
    name = guessWho.getChosenCharacter()
    console.log("is it frank, is it barbara or is it undefined???: ", name.name)
  })

})