import { useState } from 'react'

function SearchBar ({ setSelectedSen, senators, setSelectedRep, reps, selectedSen, selectedRep }) {
  
const [searchTerm, setSearchTerm] = useState("")
  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value })
  // }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSelectedSen(senators.filter(rep => rep.last_name.toLowerCase() === searchTerm.toLowerCase()))
    if(!selectedSen.length){
      setSelectedRep(reps.filter(rep => rep.last_name.toLowerCase() === searchTerm.toLowerCase()))
      console.log(selectedRep, searchTerm)
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
            />
          </div>
        </form>
      </div>
    )
  }

export default SearchBar