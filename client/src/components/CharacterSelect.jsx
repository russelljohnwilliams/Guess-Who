var React = require('react')

var CharacterSelect = React.createClass({

  getInitialState: function(){
    return {attribute: null}
  },

  handleSelect: function(e){
    this.setState({attribute: e.target.value})

    
  },

  // handleOwnerChange: function(e){
  //   this.setState({owner: e.target.value})
  // },

  // handleSubmit: function(e){
  //   e.preventDefault()
  //   var owner = this.state.owner.trim()
  //   console.log(owner)
  //   if (!owner){
  //     return
  //   }
  //   this.props.onCommentSubmit(owner)
  // },


  render: function(){
    return(
      <select value="nothing" onChange={this.handleSelect}  >
      <option value="glasses" key="glasses">
      are they person wearing glasses?
      </option>,
      <option value="beard" key="beard">
      have they got themselves a beard or moustache?
      </option>,
      <option value="hat" key="hat">
      are they wearing a fetching hat?
      </option>
      </select>
      )
  }
})


module.exports = CharacterSelect





