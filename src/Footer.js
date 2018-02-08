import React from "react"
import {Col} from "react-bootstrap"

const styles = {
  position: "fixed",
  height: "30px",
  bottom: 0,
  zIndex: 2,
  width: "100%",
  backgroundColor: "white",
  border: "1px solid #ddd",
  right: 0,
  textAlign: "center",
  padding: "auto"
}

export default function Footer(){
  return (
    <div style={styles}>
      Made with care by Eric Jones
    </div>
  )
}
