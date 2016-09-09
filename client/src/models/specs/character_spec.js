var Character = require('../character');
var assert = require('assert');

describe('character', function(){
  
  beforeEach(function(){
    character = new Character({name:'Alfred', hair:'blonde', glasses:'no', beard:'yes', hat:'no', gender: 'male', smile: 'no', glasses: 'no', pic: './src/models/img/alfred.png'});
  });

  it('Chracter whould have a name ', function(){
    assert.equal('Alfred', character.name);
  });


})