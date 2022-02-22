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

    const senator = senators.filter(sen => sen[param].toLowerCase() === searchTerm.toLowerCase())

    if(senator !== [])setSelectedSen(senator)
    
    const representative = reps.filter(rep => rep[param].toLowerCase() === searchTerm.toLowerCase())
    if(representative !== []) setSelectedRep(representative)
    // NOTE: window alert logic needs fixing!!!!!!!!!
    if(senator === [] && representative === []) window.alert('No match ☹️ \nCheck your spelling and try again! \n(or search by state or zipcode instead!)')

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
