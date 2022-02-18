import { useState, useEffect } from 'react'
import apiCall from '../apis/callCongress'
import SearchBar from './SearchBar'
import Header from './Header'
import IndividualInfo from './IndividualInfo'
import styled from 'styled-components'

function App() {
  const [renderSearchButton, setRenderSearchButton] = useState(true)
  const [senators, setSenators] = useState([])
  const [reps, setReps] = useState([])
  const [selectedSen, setSelectedSen] = useState([])
  const [selectedRep, setSelectedRep] = useState([])

  useEffect(() => {
    apiCall
      .get('/senate/members.json')
      .then((res) => {
        console.log(res.data.results)
        setSenators(res.data.results[0].members)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    apiCall
      .get('/house/members.json')
      .then((res) => {
        console.log(res.data.results[0])
        setReps(res.data.results[0].members)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // onTermSubmit = async (term) => {
  //   const response = await callCongress.get('/senate/members.json')
  //   .then
  // }
  console.log(selectedSen, selectedRep)
  return (
    <Page>
      <Header
        renderSearchButton={renderSearchButton}
        setRenderSearchButton={setRenderSearchButton}
      />
      <SearchBar
        setSelectedSen={setSelectedSen}
        senators={senators}
        setSelectedRep={setSelectedRep}
        reps={reps}
        selectedSen={selectedSen}
        selectedRep={selectedRep}
        param="last_name"
      />
      <IndividualInfo selectedRep={selectedRep} selectedSen={selectedSen} />
      
    </Page>
  )
}

export default App

const Page = styled.div`
  margin: 30px;
`