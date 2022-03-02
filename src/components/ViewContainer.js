import { useState } from 'react'
import IndividualInfo from './IndividualInfo'
import SearchContainer from './SearchContainer'
import styled from 'styled-components'


function ViewContainer({ senators, reps }) {

  const [selectedSen, setSelectedSen] = useState([])
  const [selectedRep, setSelectedRep] = useState([])

  function setCon() {
    // console.log(selectedSen, selectedRep)
    if(selectedSen.length !== 0) {
      // console.log(selectedSen)
      return selectedSen
    } else if(selectedRep.length !== 0) {
      // console.log(selectedRep)
      return selectedRep
    }
  }

  const outerContainerStyles = {
    marginTop: 30
  }

  return (
    <div style={outerContainerStyles}>
      {senators && reps  ? <>
      <SearchContainer
        setSelectedSen={setSelectedSen}
        senators={senators}
        setSelectedRep={setSelectedRep}
        reps={reps}
        selectedSen={selectedSen}
        selectedRep={selectedRep}
      />
      </> : <div>Please hold....</div> }

      {selectedSen.length || selectedRep.length ? <IndividualInfo selectedCon={setCon()}/> : null }
 
    </div>
  )
}

export default ViewContainer