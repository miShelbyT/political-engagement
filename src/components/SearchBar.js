

function SearchBar({ searchTerm, setSearchTerm, onFormSubmit }) {
  
  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value })
  // }

  
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={(e) => onFormSubmit(e, "last_name")}>
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
            style={{ backgroundColor: '#B31942', color: 'white', margin: "7px 0px" }}
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
