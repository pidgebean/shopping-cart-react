// import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'


type ShoppingCartProps = {
  isOpen: boolean
}

function App({isOpen}:ShoppingCartProps) {

  return (
    <>
      <Offcanvas show={isOpen} placement="end">
        <Offcanvas.Header>Cart</Offcanvas.Header>
        <Offcanvas.Body>
          Random <br/>
          Random <br/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default App
