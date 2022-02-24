import { useState } from 'react'
import Select from 'react-dropdown-select'

function DropDownSearch() {
  const UsaStates = require('usa-states').UsaStates
  const statesAndTerritories = new UsaStates({ includeTerritories: true })

  const [location, setLocation] = useState('')
  const options = statesAndTerritories.states

  console.log(location)

  
  // function renderStates() {

  //   return states.map((state) => (
  //     <option key={state.abbreviation} value={state.abbreviation}>
  //       {state.name}
  //     </option>
  //   ))
  // }

  return (
    <form>
      <div className="ui fluid search selection dropdown">
        <label>
          <Select
            options={options}
            placeholder="Select a State or Territory"
            labelField="name"
            searchBy="abbreviation"
            valueField="abbreviation"
            searchable="true"
            onChange={(value) => setLocation(value[0].abbreviation)}
            dropdownHeight="300px"
            color="#b31942"
          />
        </label>
        <button
          className="ui button"
          style={{
            backgroundColor: '#0A3161',
            color: 'white',
            margin: '7px 0px',
          }}
        >
          {' '}
          Submit{' '}
        </button>
      </div>
    </form>
  )
}

export default DropDownSearch
