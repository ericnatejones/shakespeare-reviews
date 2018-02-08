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

export function sortBy(arr, sortType){
  if (sortType === "author"){
    return arr.sort((a, b) => a.author.localeCompare(b.author))
  } else if(sortType === "rating: lowest to highest") {
    return arr.sort((a, b) => a.rating - b.rating)
  } else if(sortType === "rating: highest to lowest") {
    return arr.sort((a, b) => b.rating - a.rating)
  }
}

export function filters(arr, min, max, searchTerm){
  return arr.filter(item => {
    return item.rating >= min &&
           item.rating <= max &&
           item.author.toLowerCase().includes(searchTerm.toLowerCase())
  })
}
