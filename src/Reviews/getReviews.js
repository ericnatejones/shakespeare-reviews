import axios from "axios"

const instance = axios.create({
  baseURL: 'http://shakespeare.podium.co/api/reviews',
  headers: {'Authorization': 'koOheljmQX'}
});

export function getReviews(){
  return instance.get()
}

export function getSingleReview(id){
  return instance.get("/"+id)
}
