import React from 'react'
import { Dropdown } from 'semantic-ui-react'


export default function CartSummary() {
  return (
    <div> <Dropdown item text='Sepet'>
    <Dropdown.Menu>
        <Dropdown.Item>Siparişlerim</Dropdown.Item>
        <Dropdown.Item>Önceden gezdiklerim</Dropdown.Item>
        <Dropdown.Item>Beğendiklerim</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown></div>
  )
}
