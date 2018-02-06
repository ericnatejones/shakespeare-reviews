import React, {Component} from "react"
import Review from "./Review"
import { getReviews, getSingleReview } from "./getReviews"

const styles = {
  info: {
    position: "absolute",
    right: 0,
    top: 0
  }
}

export default class Reviews extends Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      info: {

      }
    }

    this.toggleInfo = this.toggleInfo.bind(this)
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

  render(){
    const reviews = this.state.reviews.map(review=>{
      return <Review handleClick={this.toggleInfo} review={review} key={review.id} />
    })

    return (
      <div>
        <div>
          {reviews}
        </div>
        <div style={styles.info}>
          <div>{this.state.info.author}</div>
          <div>{this.state.info.body}</div>
        </div>
      </div>
    )
  }
}
