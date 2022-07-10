import React, { useContext } from 'react'
import Input from '../Input'
import CartWidget from '../CartWidget'
import './style.css'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Shop } from '../../context/ShopContext'

const NavBar = () => {

const {estadoA}=useContext(Shop)
console.log(estadoA)

  return (
    <Navbar bg="light" expand="lg" id='navbar'>
    <Container>
      <Navbar.Brand href="#home">Bs As Customs</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className='title' to='/'>Home</Link>
          {/* <Link className='title' to='/'>Home</Link> */}
          <NavDropdown title="Species" id="basic-nav-dropdown">
            <Link className='title' to='/category/Human'>Humans</Link>
            <Link className='title' to='/category/Alien'>Aliens</Link>
            <Link className='title' to='/category/Others'>Others</Link>
            <Link className='title' to='/category/Others'>{estadoA}</Link>
          </NavDropdown>
        <CartWidget/>
        </Nav>
      <Input></Input>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar