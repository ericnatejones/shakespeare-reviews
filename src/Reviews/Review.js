import React from "react"
import { ListGroupItem } from "react-bootstrap"
import PropTypes from "prop-types"
import StarRatings from 'react-star-ratings'


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

      {
        props.ratingView === "stars"
        ?
        <StarRatings
          rating={props.review.rating}
          numberOfStars={5}
          starDimension={"25px"}
          starSpacing={"7px"}
          starRatedColor={"#ffd700"}
        />
        :
        <p>{props.review.rating}</p>
      }
    </ListGroupItem>
  )
}

Review.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    rating: PropTypes.number
  }),
  selected: PropTypes.bool,
  handleClick: PropTypes.func
}
