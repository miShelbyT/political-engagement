import { useState } from 'react'

function SearchBar({
  setSelectedSen,
  senators,
  setSelectedRep,
  reps,
  selectedSen,
  selectedRep,
  param,
}) {
  const [searchTerm, setSearchTerm] = useState('')
  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value })
  // }

  const onFormSubmit = (event) => {
  
    event.preventDefault()
    if (senators && reps) {
      setSelectedSen(
      senators.filter(
        (sen) => sen[param].toLowerCase() === searchTerm.toLowerCase()
      )
    )
    if (!selectedSen.length) {
      setSelectedRep(
        reps.filter(
          (rep) => rep[param].toLowerCase() === searchTerm.toLowerCase()
        )
      )
      if (selectedRep === []) {
        window.alert(
          'No match ☹️ \nCheck your spelling and try again! \n(or search by state or zipcode instead!)'
        )
      }
    }
      
      console.log(senators)
      console.log(selectedSen, selectedRep)
    }
    setSearchTerm('')
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Find My Congress People:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by last name"
          />
          <button
            className="ui button"
            style={{ backgroundColor: '#B31942', color: 'white' }}
          >
            {' '}
            Submit{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
