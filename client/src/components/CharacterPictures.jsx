var React = require('react')

var CharacterPictures = React.createClass({
  render: function(){
    


    var characters = this.props.characters.map(function(character){
      return(
        <div className="characterPic">
        <img src = {character.image} />
        </div>
        
        )

    }.bind(this))
   return(<div>
   {characters}
   </div>)
  }
  })



module.exports = CharacterPictures