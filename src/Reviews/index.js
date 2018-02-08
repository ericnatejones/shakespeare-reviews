import React, {Component} from "react"
import Review from "./Review"
import Info from "./Info"
import Inputs from "./Inputs"
import { getReviews, getSingleReview, filters, sortBy } from "./helperFunctions"
import { ListGroup } from "react-bootstrap"

export default class Reviews extends Component {
  constructor(){
    super()
    this.state = {
      sortByTerm: "author",
      reviews: [],
      min: 0,
      max: 5,
      searchTerm: "",
      selected: "",
      showModal: false,
      info: {

      }
    }

    this.toggleInfo = this.toggleInfo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount(){
    getReviews().then(response => {
      this.setState({
        reviews: response.data.data
      })
    })
  }

  toggleInfo(id){
    this.handleClose()
    this.setState({
      selected: id,
      info: {}
    })
    getSingleReview(id).then(response => {
      this.setState({info: response.data.data})
      this.handleShow()
    })
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  render(){
    const { reviews, min, max, searchTerm, sortByTerm } = this.state
    const filteredReviews = filters(reviews, min, max, searchTerm)

    const sortedReviews = sortBy(filteredReviews, sortByTerm).map(review=>{
      return <Review
        handleClick={this.toggleInfo}
        review={review}
        key={review.id}
        selected={this.state.selected === review.id}
        />
    })

    return (
      <div>
        <Inputs
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        <ListGroup>
          {sortedReviews}
        </ListGroup>
        <Info onHide={this.handleClose} show={this.state.showModal} info={this.state.info} />
      </div>
    )
  }
}
