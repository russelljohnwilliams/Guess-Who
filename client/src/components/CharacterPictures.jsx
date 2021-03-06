var React = require('react')

var CharacterPictures = React.createClass({

  changeOpacity: function(e){
    var newIndex = e.target.id
   
          var div1 = document.getElementById(newIndex)
          div1.style.opacity = '1'
          if (div1.style.opacity == '1') {
              div1.style.opacity = '0'
          } else if (div1.style.opacity == '0.2'){
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
