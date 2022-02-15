import { useState } from 'react'

function SearchBar ({ setSelectedSen, senators }) {
  
const [searchTerm, setSearchTerm] = useState("")
  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value })
  // }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSelectedSen(senators.filter(rep => rep.last_name.toLowerCase() === searchTerm.toLowerCase()))
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