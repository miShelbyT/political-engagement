// import axios from 'axios'

import { useState, useEffect } from 'react'
import instance from '../apis/callCongress'
import SearchBar from './SearchBar'

///Users/michelletalbert/Development/code/call-congress/apis/callCongress.js

function App () {

  const [senators, setSenators] = useState([])
  const [reps, setReps] = useState([])

  const [senatorSearchTerm, setSenatorSearchTerm] = useState("")
  const [repSearchTerm, setRepSearchTerm] = useState("")


  const [selectedSen, setSelectedSen] = useState(null)
  console.log(selectedSen)
  const [selectedRep, setSelectedRep] = useState(null)
  
  
  useEffect(()=> {
    instance.get('/senate/members.json')
    .then(res => {
      setSenators(res.data.results[0].members)

    }).catch(err => {
      console.log(err)
    })
  }, []) 

  useEffect(()=> {
    instance.get('/house/members.json')
    .then(res => {
      setReps(res.data.results[0].members)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  
  // onTermSubmit = async (term) => {
  //   const response = await callCongress.get('/senate/members.json')
  //   .then
  // }
  
    return (
      <div>
        <h1>Call Congress</h1>
        <h2>(202) 224-3121</h2>
        <SearchBar searchTerm={senatorSearchTerm} setSearchTerm={setSenatorSearchTerm} setSelectedRep={setSelectedSen} repsList={senators}/>
       {selectedSen ?  <a href={selectedSen[0].contact_form}>{selectedSen[0].first_name} {selectedSen[0].last_name}</a> : null}
      </div>
    )
  }

export default App
