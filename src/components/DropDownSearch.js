// import { useState } from 'react'
import Select from 'react-dropdown-select'

function DropDownSearch({ setSearchTerm, onFormSubmit }) {
  const UsaStates = require('usa-states').UsaStates
  const statesAndTerritories = new UsaStates()

  const options = [...statesAndTerritories.states, 
  {name: 'American Samoa', abbreviation: 'AS'}, 
  {name: 'Guam', abbreviation: 'GU'}, 
  {name: 'Northern Mariana Islands', abbreviation: 'MP'}, 
  {name: 'Puerto Rico', abbreviation: 'PR'},
  {name: 'US Virgin Islands', abbreviation: 'VI'}].sort((a,b) => {
    return a.name <  b.name ? -1 : 1
  })

  const selectStyles = {
    fontSize: 16,
    color: "#0A3161",
    borderRadius: 4,
    padding: '10px 6px',
    fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
  }

  // console.log(options)


  return (
    <form onSubmit={(e) => onFormSubmit(e, "state")} >
      <div className="ui fluid search selection dropdown">
        <label>
          <Select
            options={options}
            placeholder="Select a State or Territory"
            labelField="name"
            searchBy="name"
            valueField="abbreviation"
            searchable="true"
            closeOnSelect="true"
            closeOnScroll="true"
            onChange={(value) => setSearchTerm(value[0].abbreviation)}
            dropdownHeight="400px"
            color="#b31942"
            style={selectStyles}
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
