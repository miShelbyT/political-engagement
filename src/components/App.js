import axios from 'axios'
import React from 'react'
import callCongress from '../apis/callCongress'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = {
    senators: [],
    representatives: [],
    selectedSen: null,
    selectedRep: null,
  }
  componentDidMount() {
    callCongress.get('/senate/members.json', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then(res => {
      console.log(res)

    })
  }
  // onTermSubmit = async (term) => {
  //   const response = await callCongress.get('/senate/members.json')
  //   .then
  // }
  render() {
    return (
      <div>
        <h1>Call Congress</h1>
        <h2>(202) 224-3121</h2>
        <SearchBar />
        
      </div>
    )
  }
}

export default App
