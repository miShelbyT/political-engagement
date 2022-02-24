import SearchBar from './SearchBar'
import DropDownSearch from './DropDownSearch'
import styled from 'styled-components'

function SearchContainer({
    setSelectedSen,
    senators,
    setSelectedRep,
    reps,
    selectedSen,
    selectedRep,
    param,
  }) {
  return (
    <Container>
      <SearchBar
        setSelectedSen={setSelectedSen}
        senators={senators}
        setSelectedRep={setSelectedRep}
        reps={reps}
        selectedSen={selectedSen}
        selectedRep={selectedRep}
        param="last_name"
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
