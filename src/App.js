import React from "react"
import Reviews from "./Reviews"
import Header from "./Header"
import Footer from "./Footer"

import {Col} from "react-bootstrap"

export default function App(){
  return (
    <Col sm={8} smOffset={2}
         md={6} mdOffset={3}
         lg={4} lgOffset={4}
    >
      <Header />
      <Reviews />
      <Footer />
    </Col>
  )
}
