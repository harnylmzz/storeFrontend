import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider } from 'semantic-ui-react'


export default function CartSummary() {
  return (
    <div> <Dropdown item text='Sepet'>
      <Dropdown.Menu>
        <Dropdown.Item>Siparişlerim</Dropdown.Item>
        <Dropdown.Item>Önceden gezdiklerim</Dropdown.Item>
        <Dropdown.Item>Beğendiklerim</Dropdown.Item>
        <DropdownDivider />
        <Dropdown.Item as={NavLink} to="/cart" >Sepete Git</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
