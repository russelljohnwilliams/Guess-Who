var React = require('react')

var CharacterPictures = React.createClass({

  changeOpacity: function(e){
    var newIndex = e.target.id
   
          var div1 = document.getElementById(newIndex)
          if (div1.style.opacity == '1') {
              div1.style.opacity = '0.3'
          } else if (div1.style.opacity = '0.3'){
              div1.style.opacity = '1'
          }
  },

  render: function(){

    var characters = this.props.characters.map(function(character, index){
      return(
        <div className="characterPic" >
        <img src = {character.image} onClick={this.changeOpacity} id={index} className="pictures"/>
        </div>
        )
    }.bind(this))
   return(<div>
   {characters}
   </div>)
  }
  
  })



module.exports = CharacterPictures
