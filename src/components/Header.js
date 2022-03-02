import { useState } from 'react'
import styled from "styled-components"

function Header() {
  const [renderSearchButton, setRenderSearchButton] = useState(false)

    const clickHandler = () => {
        console.log('clicked', renderSearchButton)
        setRenderSearchButton(prevState => !prevState)
    }

    const buttonStyles = {
      backgroundColor:'#B31942', 
      color:'white', 
      margin: "7px 0px"
    }
  return (
    <Heading>
      <Title>Engage!</Title>
      <p style={{fontSize: '1.25em'}}>
      <q>An educated citizenry is a vital requisite for our survival as a free people.</q>    Thomas Jefferson</p>
      {/* <Number>(202) 224-3121</Number> */}
      {renderSearchButton ? <button className="ui button" style={buttonStyles} onClick={clickHandler}>Start a new Search &#x1F50D;</button> : null} 
        {/* // button boolean state --> search is submitted button is true, when this button is clicked button is false */}
    </Heading>
  )
}

export default Header

const Heading = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
    margin: 15px;
    font-size: 3em;
    text-align: center;
    color: #B31942;
    -webkit-text-stroke: 2px #ffffff
    `

// const Number = styled.h2`
//     font-size: 2em;
//     text-align: center;
//     color: white;
//     -webkit-text-stroke: 2px #b31942;
//     `