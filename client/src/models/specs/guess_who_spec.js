var GuessWho = require('../guessWho');
var Character = require('../character');
var assert = require('chai').assert;
var mocha = require('mocha');
var _ = require('lodash');


describe('guessWho', function(){


  beforeEach(function(){
    guessWho = new GuessWho();
    alfred = new Character({name:'Alfred',
    blonde: true, 
    brown: false,
    white: false,
    bald: false,
    glasses: false, 
    beard: true, 
    hat: false,  
    smile: false, 
    female: false,
    male: true,
    image: '../models/img/alfred.png'});
    
    anita = new Character({name:'Anita',
    blonde: true, 
    brown: false,
    white: false,
    bald: false,
    glasses: false, 
    beard: false, 
    hat: false,  
    smile: true, 
    female: true,
    male: false,
    image: '../models/img/anita.png'});

    guessWho.addCharacter(alfred);
    guessWho.addCharacter(anita);  
  });


  it('Can add characters to the game array', function(){
    assert.equal(2, guessWho.charactersArray.length);
  })

// this test works  !
it('Can return random character from array (can not test this)', function(){
  guessWho.selectTheGameCharacter();
  console.log("randomly selected character is: ", guessWho.chosenCharacter[0]);
})

// this test works  !
it("can get chosen character name from array", function(){
  guessWho.selectTheGameCharacter();
  name = guessWho.getChosenCharacter()
  console.log("is it frank, is it barbara or is it undefined???: ", name)
})

it("can give yes answer if we have chosen the character correctly", function(){
  guessWho.addCharacterToChosenCharacterArray(alfred);
  assert.equal("yes, the character is called Alfred", guessWho.isTheCharacter("Alfred"));
})

it("can give no answer if we have chosen the character correctly", function(){
  guessWho.addCharacterToChosenCharacterArray(anita);
  assert.equal("Sorry, you have chosen incorrectly", guessWho.isTheCharacter("Alfred"));
})


it ("can ask about an attribute they do not have", function(){
  guessWho.addCharacterToChosenCharacterArray(anita);
  assert.equal("That aint no man... Definately a woman, born that way or not.", guessWho.doesCharacterHave("male"));
})


it ("can ask about another attribute they do not have", function(){
  guessWho.addCharacterToChosenCharacterArray(alfred);
  assert.equal("White? White hair? No I don't think so.", guessWho.doesCharacterHave("white"));
})

it ("can ask about an attribute they do have", function(){
  guessWho.addCharacterToChosenCharacterArray(anita);
  assert.equal("She may not be a lady, but she's all woman.", guessWho.doesCharacterHave("female"));
})

it ("can ask about another attribute they do have", function(){
  guessWho.addCharacterToChosenCharacterArray(alfred);
  assert.equal("Yeah, stupid hipster.", guessWho.doesCharacterHave("beard"));
})


})













