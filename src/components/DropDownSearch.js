import { useState } from 'react'


function DropDownSearch() {

  const UsaStates = require('usa-states').UsaStates;
  const statesAndTerritories = new UsaStates({includeTerritories: true});

  const [location, setLocation] = useState('')
  const states = statesAndTerritories.states

  

  function renderStates() {
    
    return states.map((state) => (
      <option key={state.abbreviation} value={state.abbreviation}>
        {state.name}
      </option>
    ))
  }

  return (
    <form className="ui form" >
      <div
        role="listbox"
        aria-expanded="false"
        className="ui fluid search selection dropdown"
        tabIndex="0"
      >
        <label style={{overflow: "hidden !important", height: 50, maxHeight: 50}}>
          <select
            aria-autocomplete="list"
            autoComplete="off"
            className="search"
            style={{color: "#B31942"}}
            tabIndex="0"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          >
            <option value="Select State or Territory"
              
            >
              Select State or Territory
            </option>
            {renderStates()}
          </select>
        </label>
        <button
            className="ui button"
            style={{ backgroundColor: '#0A3161', color: 'white', margin: "7px 0px" }}
          >
            {' '}
            Submit{' '}
          </button>
      </div>
      
    </form>
  )
}

export default DropDownSearch
