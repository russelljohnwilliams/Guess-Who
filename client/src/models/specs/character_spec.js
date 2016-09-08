var Character = require('../character');
var assert = require('assert');

describe('character', function(){
  
  beforeEach(function(){
    character = new Character({name:'Frank', hair:'yes', glasses:'no', beard:'no', hat:'yes'});
  });

  it('Chracter whould have a name ', function(){
    assert.equal('Frank', character.name);
  });

  it('Does character have hair ', function(){
    assert.equal('yes', character.hair);
  });

  it('Chracter whould have a name ', function(){
    assert.equal('no', character.glasses);
  });

  it('Chracter whould have a name ', function(){
    assert.equal('no', character.beard);
  });

  it('Chracter whould have a name ', function(){
    assert.equal('yes', character.hat);
  });


})