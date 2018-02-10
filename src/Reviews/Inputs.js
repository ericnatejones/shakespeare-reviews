import React from "react"
import { FormGroup, FormControl, Col, Form, Radio } from "react-bootstrap"
import PropTypes from "prop-types"

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
            placeholder="Enter name"
            onChange={props.handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col style={styles.label} sm={6}>
          <p>Sort by:</p>
          <select value={props.sortByTerm} style={styles.dropDown} name="sortByTerm" onChange={props.handleChange}>
            <option value="author">author: alphabetically</option>
            <option value="rating: lowest to highest">rating: lowest to highest</option>
            <option value="rating: highest to lowest">rating: highest to lowest</option>
          </select>
        </Col>
        <Col style={styles.label} sm={6}>
          <p>View rating as:</p>
          <Radio
            checked={props.ratingView === "stars"}
            name="ratingView"
            value="stars"
            onChange={props.handleChange}
            inline
          >
            stars
          </Radio>{' '}
          <Radio
            checked={props.ratingView === "numbers"}
            name="ratingView"
            value="numbers"
            onChange={props.handleChange}
            inline
          >
            numbers
          </Radio>
        </Col>

      </FormGroup>
    </Form>
  )
}

Inputs.propTypes = {
  ratingView: PropTypes.string,
  searchTerm: PropTypes.string,
  handleChange: PropTypes.func,
  sortByTerm: PropTypes.string
}
