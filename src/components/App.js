import React from 'react'
import callCongress from '../apis/callCongress'

class App extends React.Component {
  state = {
    senators: [],
    representatives: [],
    selectedSen: null,
    selectedRep: null,
  }
  render() {
    return (
      <div>
        <h1>Call Congress</h1>
      </div>
    )
  }
}

export default App
