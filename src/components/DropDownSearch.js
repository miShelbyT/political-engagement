import { Dropdown } from 'semantic-ui-react'

function DropDownSearch() {

  return(
    <Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='Alabama' />
      <Dropdown.Item text='New York' />
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default DropDownSearch
