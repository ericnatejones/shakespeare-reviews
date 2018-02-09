import React from "react"

const styles = {
  position: "fixed",
  height: "50px",
  top: 0,
  zIndex: 2,
  width: "100%",
  backgroundColor: "white",
  borderBottom: "1px solid #ddd",
  right: 0,
  textAlign: "center",
  verticalAlign: "center"
}

export default function Header(){
  return (
    <div style={styles}>
      <h3 style={{marginTop: "11px"}}>Shakespeare Reviews</h3>
    </div>
  )
}
