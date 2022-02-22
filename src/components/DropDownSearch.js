import { useState } from 'react'

function DropDownSearch() {
  const [location, setLocation] = useState('')
  const [states, setStates] = useState([
    {
      name: 'Alabama',
      abbreviation: 'AL',
      territory: false,
      capital: 'Montgomery',
      contiguous: true,
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
      territory: false,
      capital: 'Juneau',
      contiguous: false,
    },
  ])

  // console.log(location)

  function renderStates() {
    return states.map((state) => (
      <option key={state.abbreviation} value={state.abbreviation}>
        {state.name}
      </option>
    ))
  }

  return (
    <form className="ui form">
      <div
        role="combobox"
        aria-expanded="false"
        className="ui fluid search selection dropdown"
      >
        <label>
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
      </div>
    </form>
  )
}

export default DropDownSearch
