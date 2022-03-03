import { useState } from 'react'

import SearchBar from './SearchBar'
import DropDownSearch from './DropDownSearch'
import styled from 'styled-components'

import flag from '../images/flag.png'

function SearchContainer({ setSelectedSen, senators, setSelectedRep, reps, selectedSen, selectedRep }) {

    const [searchTerm, setSearchTerm] = useState('')
    const [dropdownSearch, setDropdownSearch] = useState('')

    const onFormSubmit = (event, param, query) => {
      
      event.preventDefault()

      const senator = senators.filter(sen => sen[param].toLowerCase() === query.toLowerCase())
      const representative = reps.filter(rep => rep[param].toLowerCase() === query.toLowerCase())
  
      setSelectedSen(senator)
      setSelectedRep(representative)
      // console.log(selectedSen, selectedRep)
      
      if(senator.length === 0 && representative.length === 0) {
        window.alert('No match ☹️ \nCheck your spelling and try again! \n(or search by state or zipcode instead!)')
      }
    
      setSearchTerm('')
    }

  return (
    <Container>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onFormSubmit={onFormSubmit}
        searchBy="last name"
      />
      <DropDownSearch 
        setDropdownSearch={setDropdownSearch}
        onFormSubmit={onFormSubmit}
        dropdownSearch={dropdownSearch}
      />
      <SearchBar searchBy="zip code"/>
    </Container>
  )
}
export default SearchContainer

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(rgba(255, 255, 255, 0.52),rgba(0, 0, 0, 0.5)), url(${flag});
  border-radius: 7px;
  padding: 20px;
`
