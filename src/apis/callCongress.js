import axios from 'axios'

const KEY = '5Ne4FFTyA8G33s8Ukq8I1c9QiOmwCYcjNd4xCvRE'

export default axios.create({
  baseURL: 'https://api.propublica.org/congress/v1/117',
  headers: {
    key: KEY,
    'Access-Control-Allow-Origin': '*',
  },
})
