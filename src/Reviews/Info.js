import React from "react"
import {Modal, Button} from "react-bootstrap"
import PropTypes from "prop-types"
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
