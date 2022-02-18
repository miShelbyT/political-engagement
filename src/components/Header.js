import { render } from "@testing-library/react"

function Header({setRenderSearchButton, renderSearchButton}) {
    const clickHandler = () => {
        console.log('clicked', renderSearchButton)
        setRenderSearchButton(prevState => !prevState)
    }
  return (
    <>
      <h1>Call Congress</h1>
      <h2>(202) 224-3121</h2>
      {renderSearchButton ? <button className="ui button" style={{backgroundColor:'#0A3161', color:'white'}} onClick={clickHandler}>Start a new Search &#x1F50D;</button> : null} 
        {/* // button boolean state --> search is submitted button is true, when this button is clicked button is false */}
    </>
  )
}

export default Header
