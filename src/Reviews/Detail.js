import React from "react"

export default function Detail(props){
  return (
    <div>yo
      <div>{props.info.author}</div>
      <div>{props.info.body}</div>
    </div>
  )
}
