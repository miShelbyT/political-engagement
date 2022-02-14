import axios from 'axios'

const KEY = '5Ne4FFTyA8G33s8Ukq8I1c9QiOmwCYcjNd4xCvRE'



const instance = axios.create({
  baseURL: 'https://api.propublica.org/congress/v1/117',
  headers: {
    'X-API-Key': KEY
  },
})

export default instance
