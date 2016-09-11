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
