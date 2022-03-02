import { useState } from 'react'

import SearchBar from './SearchBar'
import DropDownSearch from './DropDownSearch'
import styled from 'styled-components'

import flag from '../images/flag.png'

function SearchContainer({ setSelectedSen, senators, setSelectedRep, reps, selectedSen, selectedRep }) {

    const [searchTerm, setSearchTerm] = useState('')

    const onFormSubmit = (event, param) => {
      
      event.preventDefault()

      const senator = senators.filter(sen => sen[param].toLowerCase() === searchTerm.toLowerCase())
      const representative = reps.filter(rep => rep[param].toLowerCase() === searchTerm.toLowerCase())
  
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
        param="last_name"
        searchBy="last name"
      />
      <DropDownSearch 
        setSearchTerm={setSearchTerm}
        onFormSubmit={onFormSubmit}
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
  justify-content: space-evenly;
  background-image: linear-gradient(rgba(255, 255, 255, 0.52),rgba(0, 0, 0, 0.5)), url(${flag});
  border-radius: 7px;
  padding: 20px;
`
