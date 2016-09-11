var React = require('react')

var GuessResponse = function(props){

console.log("comment?????", props.comment)
 
    if(!props.comment){
      return(<div>make a guess</div>
        )
    }
    return(
      <div className="commentBox">
      <p>{props.comment}</p>  
      </div>
      )
  }



module.exports = GuessResponse