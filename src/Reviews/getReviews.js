import axios from "axios"

const instance = axios.create({
  baseURL: 'http://shakespeare.podium.co/api/reviews',
  headers: {'Authorization': 'koOheljmQX'}
});

export default function(){
  return instance.get()
}
