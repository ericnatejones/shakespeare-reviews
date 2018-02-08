import React from "react"
import { ListGroupItem } from "react-bootstrap"

export default function Review(props){
  const styles = {
    backgroundColor: props.selected ? "aliceblue" : "white"
  }

  return (
    <ListGroupItem
      style={styles}
      onClick={()=>props.handleClick(props.review.id)}
      className="review"
    >
      <h4>{props.review.author}</h4>
      <p>{props.review.rating}</p>
    </ListGroupItem>
  )
}
