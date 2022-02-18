import { useState, useEffect } from 'react'
import instance from '../apis/callCongress'
import SearchBar from './SearchBar'
import Header from './Header'

function App() {
  const [senators, setSenators] = useState([])
  const [reps, setReps] = useState([])

  const [selectedSen, setSelectedSen] = useState([])
  const [selectedRep, setSelectedRep] = useState([])

  useEffect(() => {
    instance
      .get('/senate/members.json')
      .then((res) => {
        setSenators(res.data.results[0].members)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    instance
      .get('/house/members.json')
      .then((res) => {
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

  return (
    <div>
      <Header />
      <SearchBar
        setSelectedSen={setSelectedSen}
        senators={senators}
        setSelectedRep={setSelectedRep}
        reps={reps}
        selectedSen={selectedSen}
        selectedRep={selectedRep}
        param="last_name"
      />
      {selectedSen.length ? (
        <h3>
          {selectedSen[0].short_title} {selectedSen[0].first_name}{' '}
          {selectedSen[0].last_name}
        </h3>
      ) : null}
      {selectedRep.length ? (
        <h3>
          {selectedRep[0].short_title} {selectedRep[0].first_name}{' '}
          {selectedRep[0].last_name}
        </h3>
      ) : null}
    </div>
  )
}

export default App
