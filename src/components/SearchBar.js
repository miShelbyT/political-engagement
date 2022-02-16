import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchBar ({ setSelectedSen, senators, setSelectedRep, reps, selectedSen, selectedRep, param }) {
  
const [searchTerm, setSearchTerm] = useState("")
  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value })
  // }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSelectedSen(senators.filter(rep => rep[param].toLowerCase() === searchTerm.toLowerCase()))
    if(!selectedSen.length){
      setSelectedRep(reps.filter(rep => rep[param].toLowerCase() === searchTerm.toLowerCase()))
    }
    
    setSearchTerm("")
  }

  
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Find My Congress People:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="&#x1F50D;"
            />
          </div>
        </form>
      </div>
    )
  }

export default SearchBar