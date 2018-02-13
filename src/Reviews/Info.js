import React from "react"
import {Modal, Button} from "react-bootstrap"
import PropTypes from "prop-types"
import StarRatings from 'react-star-ratings'

export default function Info(props){
  return (
    <Modal
        {...props}
        bsSize="small"
      >
      <Modal.Header closeButton>
        <Modal.Title>{props.info.author}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{props.info.body}</h3>
        <hr/>
        <div>
          <p>{new Date(props.info.publish_date).toDateString()}</p>
          <hr/>
          <StarRatings
            rating={props.info.rating}
            numberOfStars={5}
            starDimension={"25px"}
            starSpacing={"7px"}
            starRatedColor={"#ffd700"}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

Info.propTypes = {
  info: PropTypes.shape({
    author: PropTypes.boby,
    rating: PropTypes.author
  }),
  handleChange: PropTypes.func,
  sortByTerm: PropTypes.string
}
