var React = require('react')

var CharacterSelect = React.createClass({


   handleSelect: function(e){
    e.preventDefault()
    var attribute = e.target.value
    console.log("what is the attribute? ", attribute)

    this.props.onAttributeSubmit(attribute)
   
  },

  render: function(){
   
    return(
      <select className="dropDown" value="nothing" onChange={this.handleSelect}  >
      <option key="nowt">
      Please select 
      </option>,
      <option value="blonde" key="blonde">
      Is this person a natural BLONDE?
      </option>,
      <option value="brown" key="brown">
      Is this person a BRUNNETE?
      </option>,
      <option value="white" key="white">
      Has this person got WHITE HAIR       
      </option>,
      <option value="bald" key="bald">
      Is this person a BALDY?
      </option>,
      <option value="glasses" key="glasses">
      Is this person wearing GLASSES?
      </option>,
      <option value="beard" key="beard">
      Is there A BEARD or MOUSTACHE of some description?
      </option>,
      <option value="hat" key="hat">
      Is this person wearing a HAT?
      </option>,
      <option value="smile" key="smile">
      Does this person have a beaming great big SMILE?
      </option>,
      <option value="female" key="female">
      Is this person a LADY of some description?
      </option>,
      <option value="male" key="male">
      Is the person a MAN?
      </option>,
      </select>
      )
  }
})


module.exports = CharacterSelect





