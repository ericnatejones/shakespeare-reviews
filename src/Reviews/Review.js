import React from "react"

export default function(props){
  return (
    <div onClick={props.handleClick}>
      <h6>{props.review.author}</h6>
      <p>{props.review.rating}</p>
    </div>
  )
}
