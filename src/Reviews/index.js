import React, {Component} from "react"
import Review from "./Review"
import Detail from "./Detail"
import Inputs from "./Inputs"
import { getReviews, getSingleReview, filters, sortBy } from "./helperFunctions"

export default class Reviews extends Component {
  constructor(){
    super()
    this.state = {
      sortByTerm: "author",
      reviews: [],
      min: 0,
      max: 5,
      searchTerm: "",
      info: {

      }
    }

    this.toggleInfo = this.toggleInfo.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    getReviews().then(response => {
      this.setState({
        reviews: response.data.data
      })
    })
  }

  toggleInfo(id){
    getSingleReview(id).then(response => {
      this.setState({
        info: response.data.data
      })
    })
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const { reviews, min, max, searchTerm, sortByTerm } = this.state
    const filteredReviews = filters(reviews, min, max, searchTerm)

    const sortedReviews = sortBy(filteredReviews, sortByTerm).map(review=>{
      return <Review handleClick={this.toggleInfo} review={review} key={review.id} />
    })

    return (
      <div>
        <Inputs
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        {sortedReviews}
        <Detail info={this.state.info} />
      </div>
    )
  }
}
