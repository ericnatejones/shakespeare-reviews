import React, {Component} from "react"
import Review from "./Review"
import getReviews from "./getReviews"

export default class Reviews extends Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    getReviews().then(response => {
      this.setState({
        reviews: response.data.data
      })
    })
  }

  handleClick(){
    console.log("clicked")
  }

  render(){
    return this.state.reviews.map(review=>{
      return <Review review={review} key={review.id} />
    })
  }
}
