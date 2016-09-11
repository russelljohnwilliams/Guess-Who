var React = require('react')

var CharacterGuess = React.createClass({

  getInitialState: function(){
    return {character: null}
  },

  handleChange: function(e){
    var name = e.target.value
    this.setState({character: name})
    this.props.onGuessSubmit(name)
  },

  handleSelect: function(e){
    e.preventDefault()
    var attribute = e.target.value
    this.props.onGuessSubmit(attribute)
  },

  render: function(){
    var characters = this.props.characters.map(function(character){
      return(
        <option value={character.name} key={character.name}>
        I think it might be {character.name}
        </option>
        )
    }.bind(this))
    return(
      <select value={this.state.character} onChange={this.handleSelect}>
      {characters}
      </select>
      )
  }
})

module.exports = CharacterGuess



// var React = require('react')

// var CharacterGuess = React.createClass({

//    handleSelect: function(e){
//     e.preventDefault()
//     var attribute = e.target.value
//     this.props.onGuessSubmit(attribute)
//   },

//   render: function(){

//     return(
//       <select value="nothing" onChange={this.handleSelect}  >
//       <option key="nowt">
//       Select a name to take a guess 
//       </option>,
//       <option value="Alfred" key="Alfred">
//       Alfred
//       </option>,
//       <option value="Anita" key="Anita">
//       Anita
//       </option>,
//       </select>
//       )
//   }
// })


// module.exports = CharacterGuess





