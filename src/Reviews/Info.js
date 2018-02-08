import React from "react"
import {Modal, Button} from "react-bootstrap"

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
