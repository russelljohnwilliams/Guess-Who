var React = require('react')

var GuessResponse = function(props){

console.log("comment?????", props.comment)
 
    if(!props.comment){
      return(<div>make a guess</div>
        )
    }
    return(
      <div>
      <p>{props.comment}</p>  
      <p>Here is the comment</p>
      </div>
      )
  }



module.exports = GuessResponse