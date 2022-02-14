

function SearchBar ({ searchTerm, setSearchTerm, setSelectedRep, repsList }) {
  

  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value })
  // }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSelectedRep(repsList.filter(rep => rep.last_name.toLowerCase() === searchTerm.toLowerCase()))
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