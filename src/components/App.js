// import axios from 'axios'

import React from 'react'
import instance from '../apis/callCongress'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = {
    senators: [],
    representatives: [],
    selectedSen: null,
    selectedRep: null,
  }
  componentDidMount() {
    instance.get('/senate/members.json')
    .then(res => {
      console.log(res.data.results[0].members[0].last_name)

    }).catch(err => {
      console.log(err)
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
