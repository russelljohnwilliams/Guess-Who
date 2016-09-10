var Character = function(params){
  this.name = params.name;
  this.blonde = params.hair;
  this.brown = params.hair;
  this.white = params.hair;
  this.bald = params.hair;
  this.glasses = params.glasses;
  this.beard = params.beard;
  this.hat = params.hat;
  this.smile = params.smile;
  this.female = params.female;
  this.male = params.male;
  this.image = params.image;
}

module.exports = Character;