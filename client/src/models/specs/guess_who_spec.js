var GuessWho = require('../guessWho');
var Character = require('../character');
var assert = require('chai').assert;
var mocha = require('mocha');
var _ = require('lodash');


describe('guessWho', function(){


  beforeEach(function(){
    guessWho = new GuessWho();
    alfred = new Character({name:'Alfred', hair:'blonde', glasses:'no', beard:'yes', hat:'no', gender: 'male', smile: 'no', glasses: 'no', pic: './src/models/img/alfred.png'});
    anita = new Character({name:'Anita', hair:'blonde', glasses:'no', beard:'no', hat:'no', gender: 'female', smile: 'yes', glasses: 'no', pic: './src/models/img/anita.png'});
    guessWho.addCharacter(alfred);
    guessWho.addCharacter(anita);  

  });


  it('Can add characters to the game array', function(){
    assert.equal(2, guessWho.charactersArray.length);
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