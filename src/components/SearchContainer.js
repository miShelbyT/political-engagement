import SearchBar from './SearchBar'

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
    <>
      <SearchBar
        setSelectedSen={setSelectedSen}
        senators={senators}
        setSelectedRep={setSelectedRep}
        reps={reps}
        selectedSen={selectedSen}
        selectedRep={selectedRep}
        param="last_name"
      />
    </>
  )
}
export default SearchContainer
