

function SearchBar({ searchTerm, setSearchTerm, onFormSubmit, searchBy }) {
  
  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value })
  // }

  
  return (
    <div className="search-bar ui segment" style={{ width: 300}}>
      <form className="ui form" onSubmit={(e) => onFormSubmit(e, "last_name", searchTerm)}>
        <div className="field">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search by ${searchBy}`}
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
