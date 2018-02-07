import React from "react"

export default function Inputs(props){
  return (
    <form name="inputs">
      <label>Search By Author
        <input
          name="searchTerm"
          value={props.searchTerm}
          onChange={props.handleChange}
        />
      </label>
      <label>Sort By:
        <select name="sortByTerm" onChange={props.handleChange}>
          <option value="author">author</option>
          <option value="rating: lowest to highest">rating: lowest to highest</option>
          <option value="rating: highest to lowest">rating: highest to lowest</option>
        </select>
      </label>
    </form>
  )
}
