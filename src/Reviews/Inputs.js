import React from "react"
import {MenuItem, FormGroup, ControlLabel, FormControl, Col, Form, DropdownButton} from "react-bootstrap"

const styles = {
  form: {
    padding: "10px",
    marginTop: "60px"
  },
  dropDown: {
    height: "35px",
    fontSize: "15px"
  },
  label: {
    marginBottom: "10px"
  }
}

export default function Inputs(props){
  return (
    <Form horizontal style={styles.form}>
      <FormGroup
        controlId="formBasicText"
      >
        <Col style={styles.label} sm={5} md={12} lg={5}>
          Search by author:
        </Col>
        <Col sm={5} md={12}>
          <FormControl
            type="text"
            value={props.searchTerm}
            name="searchTerm"
            placeholder="Enter text"
            onChange={props.handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col style={styles.label} sm={5} md={12} lg={5}>
          Sort by:
        </Col>
        <Col sm={5} md={12}>
          <select style={styles.dropDown} name="sortByTerm" onChange={props.handleChange}>
            <option value="author">author: alphabetically</option>
            <option value="rating: lowest to highest">rating: lowest to highest</option>
            <option value="rating: highest to lowest">rating: highest to lowest</option>
          </select>
        </Col>

      </FormGroup>
    </Form>
  )
}
