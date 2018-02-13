import {getReviews} from "./helperFunctions";

test('checks for getReviews to be an array', done => {
  function callback(response) {
    console.log(Array.isArray(response.data.data))
    expect(Array.isArray(response.data.data)).toBe(true)
    done()
  }

  getReviews().then(callback)
})
