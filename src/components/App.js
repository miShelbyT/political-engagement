import { useState, useEffect } from 'react'
import apiCall from '../apis/callCongress'
import Header from './Header'
import ViewContainer from './ViewContainer'

import styled from 'styled-components'

function App() {
  
  const [showInputFields, renderShowInputFields] = useState(true)
  const [senators, setSenators] = useState([])
  const [reps, setReps] = useState([])

  useEffect(() => {
    apiCall
      .get('/senate/members.json')
      .then((res) => {
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
        setReps(res.data.results[0].members)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Page>
      <Header/>
      <ViewContainer 
        senators={senators}
        reps={reps}/>
    </Page>
  )
}

export default App

const Page = styled.div`
  margin: 50px;
`