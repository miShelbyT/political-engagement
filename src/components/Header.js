import styled from "styled-components"

function Header({setRenderSearchButton, renderSearchButton}) {
    const clickHandler = () => {
        console.log('clicked', renderSearchButton)
        setRenderSearchButton(prevState => !prevState)
    }
  return (
    <>
      <Title>CALL CONGRESS</Title>
      <Number>(202) 224-3121</Number>
      {renderSearchButton ? <button className="ui button" style={{backgroundColor:'#B31942', color:'white'}} onClick={clickHandler}>Start a new Search &#x1F50D;</button> : null} 
        {/* // button boolean state --> search is submitted button is true, when this button is clicked button is false */}
    </>
  )
}

export default Header

const Title = styled.h1`
    margin: 15px;
    font-size: 6em;
    text-align: center;
    color: #B31942;
    -webkit-text-stroke: 2px #ffffff
    `

const Number = styled.h2`
    font-size: 4em;
    text-align: center;
    color: white;
    -webkit-text-stroke: 2px #b31942;
    `