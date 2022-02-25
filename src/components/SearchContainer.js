import { useState } from 'react'

import SearchBar from './SearchBar'
import DropDownSearch from './DropDownSearch'
import styled from 'styled-components'

function SearchContainer({
    setSelectedSen,
    senators,
    setSelectedRep,
    reps,
    selectedSen,
    selectedRep
  }) {

    const [searchTerm, setSearchTerm] = useState('')

    const onFormSubmit = (event, param) => {
      event.preventDefault()
  
      const senator = senators.filter(sen => sen[param].toLowerCase() === searchTerm.toLowerCase())
      const representative = reps.filter(rep => rep[param].toLowerCase() === searchTerm.toLowerCase())
  
      if(senator !== [])setSelectedSen(senator)
      if(representative !== []) setSelectedRep(representative)
      
      if(senator.length === 0 && representative.length === 0) {
        window.alert('No match ☹️ \nCheck your spelling and try again! \n(or search by state or zipcode instead!)')
      }
     // NOTE: i think i fixed window alert logic!!!!!!!!!
      setSearchTerm('')
    }

  return (
    <Container>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onFormSubmit={onFormSubmit}
        setSelectedSen={setSelectedSen}
        senators={senators}
        setSelectedRep={setSelectedRep}
        reps={reps}
        selectedSen={selectedSen}
        selectedRep={selectedRep}
        // param="last_name"
      />
      <DropDownSearch />
      <SearchBar />
    </Container>
  )
}
export default SearchContainer

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`
